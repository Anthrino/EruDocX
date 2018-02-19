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
    const len = this.fileName.length;
    this.response_text = 'Selected Doc : ' + this.fileName;
    if (len > 25) {
      this.response_text = 'Selected Doc : ' + this.fileName.slice(0, 15) + '..' + this.fileName.slice(-10, len);
    }

  }

  fileUpload(): void {
    if (this.file) {
      this._fileService.callComponentMethod(this.file, this.fileName);
      this.response_text = this.response_text.replace('Selected', 'Uploaded');
    } else {
      alert('Please select a file for upload')
    }  }
}
