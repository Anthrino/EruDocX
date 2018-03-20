// Λnדhгιnכ™
import {Injectable} from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptionsArgs, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class QAService {
  private _erudite_server = 'http://127.0.0.1:5001/';
  public query: string;
  // public dataset: string;

  private componentMethodCallSource = new Subject<any>();
  // headers: Headers;
  // options: RequestOptionsArgs;

  // Observable string streams
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  constructor(private _http: Http) {
  }

  // Service message commands
  callComponentMethod(query) {
    this.query = query;
    // this.dataset = dataset;
    this.componentMethodCallSource.next();
  }

  getQueryAnswer(query: string): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const options: RequestOptionsArgs = {
      method: RequestMethod.Post,
      headers: headers,
    };
    return this._http.post(this._erudite_server + 'query', JSON.stringify({'query': query}), JSON.stringify(options))
      .map(response => response.json().answers as any).catch(this.handleError);

    // return this._http.get(this._erudite_server, {search: this._params}).toPromise()
    //   .then(response => response.json().data as string).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('Error occurred', error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}

