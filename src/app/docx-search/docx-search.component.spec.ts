import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocxSearchComponent } from './docx-search.component';

describe('DocxSearchComponent', () => {
  let component: DocxSearchComponent;
  let fixture: ComponentFixture<DocxSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocxSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocxSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
