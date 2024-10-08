import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTareasAddComponent } from './tipo-tareas-add.component';

describe('TipoTareasAddComponent', () => {
  let component: TipoTareasAddComponent;
  let fixture: ComponentFixture<TipoTareasAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoTareasAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoTareasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
