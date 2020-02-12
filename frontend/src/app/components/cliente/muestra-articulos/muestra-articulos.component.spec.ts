import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraArticulosComponent } from './muestra-articulos.component';

describe('MuestraArticulosComponent', () => {
  let component: MuestraArticulosComponent;
  let fixture: ComponentFixture<MuestraArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
