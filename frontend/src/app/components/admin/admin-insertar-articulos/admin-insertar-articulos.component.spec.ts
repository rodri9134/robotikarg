import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsertarArticulosComponent } from './admin-insertar-articulos.component';

describe('AdminInsertarArticulosComponent', () => {
  let component: AdminInsertarArticulosComponent;
  let fixture: ComponentFixture<AdminInsertarArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInsertarArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInsertarArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
