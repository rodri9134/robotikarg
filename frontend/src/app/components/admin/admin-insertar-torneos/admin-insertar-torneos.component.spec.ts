import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsertarTorneosComponent } from './admin-insertar-torneos.component';

describe('AdminInsertarTorneosComponent', () => {
  let component: AdminInsertarTorneosComponent;
  let fixture: ComponentFixture<AdminInsertarTorneosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInsertarTorneosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInsertarTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
