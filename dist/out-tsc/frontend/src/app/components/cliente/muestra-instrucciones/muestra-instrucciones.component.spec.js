import { async, TestBed } from '@angular/core/testing';
import { MuestraInstruccionesComponent } from './muestra-instrucciones.component';
describe('MuestraInstruccionesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MuestraInstruccionesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MuestraInstruccionesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=muestra-instrucciones.component.spec.js.map