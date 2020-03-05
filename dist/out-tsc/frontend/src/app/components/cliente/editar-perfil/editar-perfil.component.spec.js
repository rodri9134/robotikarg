import { async, TestBed } from '@angular/core/testing';
import { EditarPerfilComponent } from './editar-perfil.component';
describe('EditarPerfilComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditarPerfilComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EditarPerfilComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=editar-perfil.component.spec.js.map