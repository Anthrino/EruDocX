import {Component, OnInit} from '@angular/core';
import {ResponseComponent} from '../response/response.component'
import {QAService} from '../qa.service';
import {FileService} from '../file.service';

@Component({
  selector: 'app-docx-search',
  templateUrl: './docx-search.component.html',
  styleUrls: ['./docx-search.component.css']
})
export class DocxSearchComponent implements OnInit {
  title: string;
  query: string;
  fileStatus: boolean;
  searchProvider: ResponseComponent;

  constructor(private _qaService: QAService, private _fileService: FileService) {
    this.title = 'Article Search';
    this.fileStatus = false;

    this._fileService.componentMethodCalled$.subscribe(
      () => {
        this.fileStatus = true;
      }
    );
  }

  ngOnInit() {
  }

  querySubmit(event: Event): void {
    if (!this.fileStatus) {
      alert('Please upload your file first')
    } else if (!this.query) {
      alert('Please enter a question?')
    } else {
      event.preventDefault();
      this._qaService.callComponentMethod(this.query);
    }
  }

}
