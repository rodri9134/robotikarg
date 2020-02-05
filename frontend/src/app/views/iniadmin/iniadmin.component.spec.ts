import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniadminComponent } from './iniadmin.component';

describe('IniadminComponent', () => {
  let component: IniadminComponent;
  let fixture: ComponentFixture<IniadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
