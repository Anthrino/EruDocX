import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-docx-search',
  templateUrl: './docx-search.component.html',
  styleUrls: ['./docx-search.component.css']
})
export class DocxSearchComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'Article Search';
  }
  ngOnInit() {
  }

}
