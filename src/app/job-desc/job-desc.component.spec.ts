import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDescComponent } from './job-desc.component';

describe('JobDescComponent', () => {
  let component: JobDescComponent;
  let fixture: ComponentFixture<JobDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
