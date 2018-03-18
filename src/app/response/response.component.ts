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
  answers: any;
  spinner: boolean;
  status: boolean;

  constructor(private _qaService: QAService, private _fileService: FileService) {
    this.response_text = 'This is where the response will appear..';
    this._qaService.componentMethodCalled$.subscribe(
      () => {
        this.retrieveAnswer();
      }
    );
    // this._qaService.componentMethodCalled$.subscribe(
    //   () => {
    //     setTimeout(function () {
    //       this.updateStatus();
    //     }, 1000);
    //   }
    // );
    this._fileService.componentMethodCalled$.subscribe(
      () => {
        this.answers = null;
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
          document.getElementById('response-window').style.marginTop = '10%';
          this.response_text = response;
          this.spinner = false;
        }
        , error => {
          this.response_text = <any>error;
          this.spinner = false;
        });
    this.spinner = false;
    this.status = true;
  }

  updateStatus(): void {
    alert('here');
    // while (this.status) {
    //   this._qaService.getStatus()
    //     .subscribe(response => {
    //         this.response_text = response;
    //         alert(response);
    //         if (response === 'false') {
    //           this.status = false;
    //         }
    //       }
    //       , error => {
    //         alert(error);
    //         this.response_text = <any>error;
    //         this.spinner = false;
    //         this.status = false;
    //       });
    // }
  }

  retrieveAnswer(): void {
    console.log(this._qaService.query);
    this.response_text = 'Query is being processed..';
    this.spinner = true;
    this._qaService.getQueryAnswer(this._qaService.query)
      .subscribe(response => {
          document.getElementById('response-window').style.marginTop = '3%';
          this.response_text = 'Answers:';
          this.answers = response;
          // data.forEach(ans => {
          //   this.response_text += (ans.word + ' : ' + ans.score + '\n');
          // });
          this.spinner = false;
        }
        , error => {
          this.response_text = <any>error;
          this.spinner = false;
        });
    this.status = false;
  }
}
