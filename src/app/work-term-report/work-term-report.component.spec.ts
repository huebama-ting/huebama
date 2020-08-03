import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTermReportComponent } from './work-term-report.component';

describe('WorkTermReportComponent', () => {
  let component: WorkTermReportComponent;
  let fixture: ComponentFixture<WorkTermReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTermReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTermReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
