import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRememberComponent } from './login-remember.component';

describe('LoginRememberComponent', () => {
  let component: LoginRememberComponent;
  let fixture: ComponentFixture<LoginRememberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRememberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
