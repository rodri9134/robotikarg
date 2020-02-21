import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditarTorneosComponent } from './admin-editar-torneos.component';

describe('AdminEditarTorneosComponent', () => {
  let component: AdminEditarTorneosComponent;
  let fixture: ComponentFixture<AdminEditarTorneosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditarTorneosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditarTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
