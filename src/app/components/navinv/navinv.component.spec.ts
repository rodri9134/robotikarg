import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavinvComponent } from './navinv.component';

describe('NavinvComponent', () => {
  let component: NavinvComponent;
  let fixture: ComponentFixture<NavinvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavinvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavinvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
