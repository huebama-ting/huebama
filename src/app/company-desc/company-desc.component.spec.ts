import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDescComponent } from './company-desc.component';

describe('CompanyDescComponent', () => {
  let component: CompanyDescComponent;
  let fixture: ComponentFixture<CompanyDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
