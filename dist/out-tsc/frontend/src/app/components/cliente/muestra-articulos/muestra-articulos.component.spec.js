import { async, TestBed } from '@angular/core/testing';
import { MuestraArticulosComponent } from './muestra-articulos.component';
describe('MuestraArticulosComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MuestraArticulosComponent]
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
//# sourceMappingURL=muestra-articulos.component.spec.js.map