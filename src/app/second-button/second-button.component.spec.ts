import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondButtonComponent } from './second-button.component';

describe('SecondButtonComponent', () => {
  let component: SecondButtonComponent;
  let fixture: ComponentFixture<SecondButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
