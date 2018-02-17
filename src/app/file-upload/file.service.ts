// Λnדhгιnכ™
import {Injectable} from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptionsArgs} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FileService {
  private _erudite_server = 'http://127.0.0.1:5000/';
  private _erudite_aws_server = ' http://s3-ap-south-1.amazonaws.com/eruditex-file-server';
  public filename: string;
  private componentMethodCallSource = new Subject<any>();
  // headers: Headers;
  // options: RequestOptionsArgs;

  // Observable string streams
  // componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  constructor(private _http: Http) {
  }

  // Service message commands
  // callComponentMethod(file) {
  //   // this.filename = query;
  //   this.componentMethodCallSource.next();
  // }

  uploadFile(file: File): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    const options: RequestOptionsArgs = {
      method: RequestMethod.Post,
      headers: headers,
    };
    return this._http.post(this._erudite_aws_server, file, JSON.stringify(options))
      .map(response => response.text() as string).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('Error occurred', error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
