import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingbootstrapComponent } from './addingbootstrap.component';

describe('AddingbootstrapComponent', () => {
  let component: AddingbootstrapComponent;
  let fixture: ComponentFixture<AddingbootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingbootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
