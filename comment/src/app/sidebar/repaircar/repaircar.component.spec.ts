import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaircarComponent } from './repaircar.component';

describe('RepaircarComponent', () => {
  let component: RepaircarComponent;
  let fixture: ComponentFixture<RepaircarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepaircarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepaircarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
