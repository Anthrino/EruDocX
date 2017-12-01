import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeNnComponent } from './visualize-nn.component';

describe('VisualizeNnComponent', () => {
  let component: VisualizeNnComponent;
  let fixture: ComponentFixture<VisualizeNnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizeNnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeNnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
