import {Component, OnInit} from '@angular/core';
import {QAService} from '../qa.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  response_text: string;

  constructor(private _qaService: QAService) {
    this.response_text = 'This is where the response will appear..';
    this._qaService.componentMethodCalled$.subscribe(
      () => {
        this.retrieveAnswer();
      }
    );
  }

  ngOnInit() {
  }

  retrieveAnswer() {
    console.log(this._qaService.query);
    this._qaService.getQueryAnswer(this._qaService.query)
      .subscribe(response => this.response_text = response, error => this.response_text = <any>error);
  }
}
