// Λnדhгιnכ™
import {Component, OnInit} from '@angular/core';
import {FileService} from '../file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {
  response_text: string;
  fileName: string;
  file: File;

  constructor(private _fileService: FileService) {
    this.response_text = 'No document selected';
  }

  ngOnInit() {
  }

  fileChange(fileInput: Event): void {
    this.response_text = 'No document selected';
    this.file = (<HTMLInputElement>fileInput.target).files[0];
    this.fileName = this.file.name;
    this.response_text = 'Selected Doc : ' + this.fileName;
  }

  fileUpload(): void {
    this._fileService.uploadFile(this.file);
  }
}
