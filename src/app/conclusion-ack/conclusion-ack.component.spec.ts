import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionAckComponent } from './conclusion-ack.component';

describe('ConclusionAckComponent', () => {
  let component: ConclusionAckComponent;
  let fixture: ComponentFixture<ConclusionAckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConclusionAckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclusionAckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
