import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByRecieverComponent } from './find-by-reciever.component';

describe('FindByRecieverComponent', () => {
  let component: FindByRecieverComponent;
  let fixture: ComponentFixture<FindByRecieverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByRecieverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByRecieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
