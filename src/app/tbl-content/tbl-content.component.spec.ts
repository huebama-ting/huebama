import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblContentComponent } from './tbl-content.component';

describe('TblContentComponent', () => {
  let component: TblContentComponent;
  let fixture: ComponentFixture<TblContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
