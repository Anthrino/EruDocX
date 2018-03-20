// Λnדhгιnכ™
import {Injectable} from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptionsArgs} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMap';
import 'aws-sdk/dist/aws-sdk';

@Injectable()
export class FileService {
  private _erudite_server = 'http://127.0.0.1:5000/';
  private _erudite_aws_server = ' http://s3-ap-south-1.amazonaws.com/eruditex-file-server';
  window: any = window;
  AWSService: any = this.window.AWS;
  private filename: string;
  private file: File;
  private componentMethodCallSource = new Subject<any>();

  // Observable string streams
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  constructor(private _http: Http) {
    // TODO: find secure way to access S3 instead of exposing IMA keys publicly
    this.AWSService.config.region = 'ap-south-1';
  }

  // Service message commands
  callComponentMethod(file: File, filename: string) {
    this.file = file;
    this.filename = filename;
    this.uploadFile();
    this.componentMethodCallSource.next();
  }

  uploadFile(): any {
    // const S3Bucket = new this.AWSService.S3({params: {Bucket: 'eruditex-file-server'}});
    // const params = {Key: this.filename, Body: this.file};
    // S3Bucket.upload(params, function (err, data) {
    //   console.log(err, data);
    // });
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    const options: RequestOptionsArgs = {
      method: RequestMethod.Post,
      headers: headers,
    };

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('filename', this.filename);

    // return this._http.post(this._erudite_server + 'filed', JSON.stringify({'filename': this.filename}), JSON.stringify(options))
    //   .map(response => response.text() as string, status => false).catch(this.handleError);

    return this._http.post(this._erudite_server + 'filed', formData, JSON.stringify(options))
      .map(response => response.text() as string, status => false).catch(this.handleError);
  }

  getStatus(): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const options: RequestOptionsArgs = {
      method: RequestMethod.Post,
      headers: headers,
    };

    return Observable.interval(500).mergeMap(() => this._http.get(this._erudite_server + 'status',
      JSON.stringify(options))).map(res => res.json().status as string);

    // return this._http.get(this._erudite_server + 'status', JSON.stringify(options))
    //   .map(response => response.json().status as string).catch(this.handleError);

  }

  private handleError(error: any) {
    console.error('Error occurred', error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
