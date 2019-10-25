import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstaresComponent } from './bookstares.component';

describe('BookstaresComponent', () => {
  let component: BookstaresComponent;
  let fixture: ComponentFixture<BookstaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookstaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
