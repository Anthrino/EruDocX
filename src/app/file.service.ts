import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FileService {
  private _erudite_server = 'http://127.0.0.1:5000/';
  public filename: string;
  private componentMethodCallSource = new Subject<any>();
  // headers: Headers;
  // options: RequestOptionsArgs;

  // Observable string streams
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  constructor(private _http: Http) {
  }

  // Service message commands
  callComponentMethod(file) {
    // this.filename = query;
    this.componentMethodCallSource.next();
  }
  //
  // getQueryAnswer(query: string): Observable<string> {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //
  //   const options: RequestOptionsArgs = {
  //     method: RequestMethod.Post,
  //     headers: headers,
  //   };
  //   return this._http.post(this._erudite_server + this.dataset, JSON.stringify({'query': query}), JSON.stringify(options))
  //     .map(response => response.text() as string).catch(this.handleError);

    // return this._http.get(this._erudite_server, {search: this._params}).toPromise()
    //   .then(response => response.json().data as string).catch(this.handleError);
  // }

  private handleError(error: any) {
    console.error('Error occurred', error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}