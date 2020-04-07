import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToitComponent } from './toit.component';

describe('ToitComponent', () => {
  let component: ToitComponent;
  let fixture: ComponentFixture<ToitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
