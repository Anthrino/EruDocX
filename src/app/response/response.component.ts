import {Component, OnInit} from '@angular/core';
import {QAService} from '../qa.service';
import {FileService} from '../file.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  response_text: string;
  spinner: boolean;

  constructor(private _qaService: QAService, private _fileService: FileService) {
    this.response_text = 'This is where the response will appear..';
    this._qaService.componentMethodCalled$.subscribe(
      () => {
        this.retrieveAnswer();
      }
    );

    this._fileService.componentMethodCalled$.subscribe(
      () => {
        this.fileStatus();
      }
    );
  }

  ngOnInit() {
  }

  fileStatus(): void {
    this.response_text = 'Document is being uploaded..';
    this.spinner = true;
    this.response_text = this._fileService.uploadFile()
      .subscribe(response => {
          this.response_text = response;
          this.spinner = false;
        }
        , error => {
          this.response_text = <any>error;
          this.spinner = false;
        });
    this.spinner = false;
  }

  retrieveAnswer(): void {
    console.log(this._qaService.query);
    this.response_text = 'Query is being processed..';
    this.spinner = true;
    this._qaService.getQueryAnswer(this._qaService.query)
      .subscribe(response => {
          this.response_text = response;
          this.spinner = false;
        }
        , error => {
          this.response_text = <any>error;
          this.spinner = false;
        });
  }
}
