import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTorneosComponent } from './admin-torneos.component';

describe('AdminTorneosComponent', () => {
  let component: AdminTorneosComponent;
  let fixture: ComponentFixture<AdminTorneosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTorneosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
