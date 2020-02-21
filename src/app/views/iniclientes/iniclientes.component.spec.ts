import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniclientesComponent } from './iniclientes.component';

describe('IniclientesComponent', () => {
  let component: IniclientesComponent;
  let fixture: ComponentFixture<IniclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
