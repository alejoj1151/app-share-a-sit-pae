import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersitComponent } from './offersit.component';

describe('OffersitComponent', () => {
  let component: OffersitComponent;
  let fixture: ComponentFixture<OffersitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
