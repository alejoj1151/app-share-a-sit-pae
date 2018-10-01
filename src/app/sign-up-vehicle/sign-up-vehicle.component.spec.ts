import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpVehicleComponent } from './sign-up-vehicle.component';

describe('SignUpVehicleComponent', () => {
  let component: SignUpVehicleComponent;
  let fixture: ComponentFixture<SignUpVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
