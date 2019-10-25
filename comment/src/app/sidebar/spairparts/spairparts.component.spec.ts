import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpairpartsComponent } from './spairparts.component';

describe('SpairpartsComponent', () => {
  let component: SpairpartsComponent;
  let fixture: ComponentFixture<SpairpartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpairpartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpairpartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
