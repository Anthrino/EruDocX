import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DocxSearchComponent} from './docx-search/docx-search.component';

import {ResponseComponent} from './response/response.component';
import {QAService} from './qa.service';

import {
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatToolbarModule
} from '@angular/material';

import {VisualizeNnComponent} from './visualize-nn/visualize-nn.component';
import {FileUploadComponent} from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    DocxSearchComponent,
    ResponseComponent,
    VisualizeNnComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [QAService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
