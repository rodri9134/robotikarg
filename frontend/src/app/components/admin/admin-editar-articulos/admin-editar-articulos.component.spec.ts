import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditarArticulosComponent } from './admin-editar-articulos.component';

describe('AdminEditarArticulosComponent', () => {
  let component: AdminEditarArticulosComponent;
  let fixture: ComponentFixture<AdminEditarArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditarArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditarArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
