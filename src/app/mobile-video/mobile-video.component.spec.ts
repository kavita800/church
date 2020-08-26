import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVideoComponent } from './mobile-video.component';

describe('MobileVideoComponent', () => {
  let component: MobileVideoComponent;
  let fixture: ComponentFixture<MobileVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
