import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasAddComponent } from './tareas-add.component';

describe('TareasAddComponent', () => {
  let component: TareasAddComponent;
  let fixture: ComponentFixture<TareasAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
