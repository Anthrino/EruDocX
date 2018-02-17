// Λnדhгιnכ™
import { Component, OnInit } from '@angular/core';
import {FileService} from './file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  response_text: string;
  // constructor(private _fileService: FileService) { }

  ngOnInit() {
  }

  fileUpload(): void {
    // this._fileService.callComponentMethod(this.query);
  }
}
