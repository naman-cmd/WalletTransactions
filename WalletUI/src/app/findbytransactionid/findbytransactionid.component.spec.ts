import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbytransactionidComponent } from './findbytransactionid.component';

describe('FindbytransactionidComponent', () => {
  let component: FindbytransactionidComponent;
  let fixture: ComponentFixture<FindbytransactionidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbytransactionidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbytransactionidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
