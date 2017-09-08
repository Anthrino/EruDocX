import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DocxSearchComponent} from './docx-search/docx-search.component';

import {ResponseComponent} from './response/response.component';
import {QAService} from './qa.service';

import {
  MdCardModule,
  MdTabsModule,
  MdInputModule,
  MdButtonModule,
  MdIconModule,
  MdToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DocxSearchComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdCardModule,
    MdInputModule,
    MdTabsModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule
  ],
  providers: [QAService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
