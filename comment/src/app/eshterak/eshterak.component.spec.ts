import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {EshterakComponent} from './eshterak.component';
import { from } from 'rxjs';

describe('DashboardComponent', () => {
  let component: EshterakComponent;
  let fixture: ComponentFixture<EshterakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EshterakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EshterakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
