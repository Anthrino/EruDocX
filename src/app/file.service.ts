// Λnדhгιnכ™
import {Injectable} from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptionsArgs} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
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
    this.AWSService.config.accessKeyId = '<accessKeyId>';
    this.AWSService.config.secretAccessKey = '<secretAccessKey>';
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
    const S3Bucket = new this.AWSService.S3({params: {Bucket: 'eruditex-file-server'}});
    const params = {Key: this.filename, Body: this.file};
    return S3Bucket.upload(params, function (err, data) {
      console.log(err, data);
    })

  }

  // fileStatus(): Observable<string> {
  // }

}
