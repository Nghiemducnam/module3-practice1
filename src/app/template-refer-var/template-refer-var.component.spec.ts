import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferVarComponent } from './template-refer-var.component';

describe('TemplateReferVarComponent', () => {
  let component: TemplateReferVarComponent;
  let fixture: ComponentFixture<TemplateReferVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateReferVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
