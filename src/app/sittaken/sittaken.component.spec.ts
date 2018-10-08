import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SittakenComponent } from './sittaken.component';

describe('SittakenComponent', () => {
  let component: SittakenComponent;
  let fixture: ComponentFixture<SittakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SittakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SittakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
