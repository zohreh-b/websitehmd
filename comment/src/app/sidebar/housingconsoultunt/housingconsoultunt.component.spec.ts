import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingconsoultuntComponent } from './housingconsoultunt.component';

describe('HousingconsoultuntComponent', () => {
  let component: HousingconsoultuntComponent;
  let fixture: ComponentFixture<HousingconsoultuntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousingconsoultuntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingconsoultuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
