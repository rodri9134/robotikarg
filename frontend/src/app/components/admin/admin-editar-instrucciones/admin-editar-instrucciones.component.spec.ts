import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditarInstruccionesComponent } from './admin-editar-instrucciones.component';

describe('AdminEditarInstruccionesComponent', () => {
  let component: AdminEditarInstruccionesComponent;
  let fixture: ComponentFixture<AdminEditarInstruccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditarInstruccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditarInstruccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
