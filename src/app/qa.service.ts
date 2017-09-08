import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QAService {
  private _erudite_server = 'localhost:2200';
  private _params: URLSearchParams = new URLSearchParams();

  constructor(private _http: Http) {
  }

  getQueryAnswer(query: string): Promise<string> {
    this._params.set('query', query);
    return this._http.get(this._erudite_server, {search: this._params}).toPromise()
      .then(response => response.json().data as string).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

