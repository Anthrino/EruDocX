import {Component, OnInit} from '@angular/core';
import {ResponseComponent} from '../response/response.component'
import {QAService} from '../qa.service';

@Component({
  selector: 'app-docx-search',
  templateUrl: './docx-search.component.html',
  styleUrls: ['./docx-search.component.css']
})
export class DocxSearchComponent implements OnInit {
  title: string;
  query: string;
  searchProvider: ResponseComponent;

  constructor(private _qaService: QAService) {
    this.title = 'Article Search';
  }

  ngOnInit() {
  }

  querySubmit(event: Event): void {
    event.preventDefault();
    console.log(this.query);
    this._qaService.callComponentMethod(this.query);
  }

}
