import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalepinageComponent } from './calepinage.component';

describe('CalepinageComponent', () => {
  let component: CalepinageComponent;
  let fixture: ComponentFixture<CalepinageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalepinageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalepinageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
