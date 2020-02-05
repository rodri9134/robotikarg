import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcliComponent } from './navcli.component';

describe('NavcliComponent', () => {
  let component: NavcliComponent;
  let fixture: ComponentFixture<NavcliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavcliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
