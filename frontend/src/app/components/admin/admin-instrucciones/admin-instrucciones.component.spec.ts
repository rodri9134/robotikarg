import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInstruccionesComponent } from './admin-instrucciones.component';

describe('AdminInstruccionesComponent', () => {
  let component: AdminInstruccionesComponent;
  let fixture: ComponentFixture<AdminInstruccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInstruccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInstruccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
