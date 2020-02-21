import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisolegalComponent } from './avisolegal.component';

describe('AvisolegalComponent', () => {
  let component: AvisolegalComponent;
  let fixture: ComponentFixture<AvisolegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisolegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisolegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
