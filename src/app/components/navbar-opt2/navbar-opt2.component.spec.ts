import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOpt2Component } from './navbar-opt2.component';

describe('NavbarOpt2Component', () => {
  let component: NavbarOpt2Component;
  let fixture: ComponentFixture<NavbarOpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarOpt2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarOpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
