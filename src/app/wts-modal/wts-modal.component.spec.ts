import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtsModalComponent } from './wts-modal.component';

describe('WtsModalComponent', () => {
  let component: WtsModalComponent;
  let fixture: ComponentFixture<ModalWtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
