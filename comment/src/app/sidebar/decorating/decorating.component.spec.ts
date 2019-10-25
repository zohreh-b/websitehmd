import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratingComponent } from './decorating.component';

describe('DecoratingComponent', () => {
  let component: DecoratingComponent;
  let fixture: ComponentFixture<DecoratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
