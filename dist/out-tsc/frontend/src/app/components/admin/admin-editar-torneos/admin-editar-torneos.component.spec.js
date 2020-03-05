import { async, TestBed } from '@angular/core/testing';
import { AdminEditarTorneosComponent } from './admin-editar-torneos.component';
describe('AdminEditarTorneosComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminEditarTorneosComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AdminEditarTorneosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-editar-torneos.component.spec.js.map