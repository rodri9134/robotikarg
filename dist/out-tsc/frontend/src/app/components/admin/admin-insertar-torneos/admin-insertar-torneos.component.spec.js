import { async, TestBed } from '@angular/core/testing';
import { AdminInsertarTorneosComponent } from './admin-insertar-torneos.component';
describe('AdminInsertarTorneosComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminInsertarTorneosComponent]
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
//# sourceMappingURL=admin-insertar-torneos.component.spec.js.map