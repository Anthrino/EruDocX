import { Component, OnInit } from '@angular/core';
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
  }

  ngOnInit() {
    this.response_text = this._qaService.getAnswer()
  }

}
