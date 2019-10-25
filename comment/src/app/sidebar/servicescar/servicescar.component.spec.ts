import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicescarComponent } from './servicescar.component';

describe('ServicescarComponent', () => {
  let component: ServicescarComponent;
  let fixture: ComponentFixture<ServicescarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicescarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicescarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
