import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticulosComponent } from './admin-articulos.component';

describe('AdminArticulosComponent', () => {
  let component: AdminArticulosComponent;
  let fixture: ComponentFixture<AdminArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
