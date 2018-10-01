import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsksitComponent } from './asksit.component';

describe('AsksitComponent', () => {
  let component: AsksitComponent;
  let fixture: ComponentFixture<AsksitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsksitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsksitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
