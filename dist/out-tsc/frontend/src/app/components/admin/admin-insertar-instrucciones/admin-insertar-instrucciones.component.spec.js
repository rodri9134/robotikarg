import { async, TestBed } from '@angular/core/testing';
import { AdminInsertarInstruccionesComponent } from './admin-insertar-instrucciones.component';
describe('AdminInsertarInstruccionesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminInsertarInstruccionesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AdminInsertarInstruccionesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-insertar-instrucciones.component.spec.js.map