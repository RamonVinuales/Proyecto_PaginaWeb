import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTareaComponent } from './modify-tarea.component';

describe('ModifyTareaComponent', () => {
  let component: ModifyTareaComponent;
  let fixture: ComponentFixture<ModifyTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyTareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
