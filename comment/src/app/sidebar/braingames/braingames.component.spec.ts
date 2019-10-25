import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BraingamesComponent } from './braingames.component';

describe('BraingamesComponent', () => {
  let component: BraingamesComponent;
  let fixture: ComponentFixture<BraingamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BraingamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BraingamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
