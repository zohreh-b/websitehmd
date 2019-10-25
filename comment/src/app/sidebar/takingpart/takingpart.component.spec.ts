import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakingpartComponent } from './takingpart.component';

describe('TakingpartComponent', () => {
  let component: TakingpartComponent;
  let fixture: ComponentFixture<TakingpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakingpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakingpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
