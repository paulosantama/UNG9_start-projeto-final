import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasEditarComponent } from './tarefas-editar.component';

describe('TarefasEditarComponent', () => {
  let component: TarefasEditarComponent;
  let fixture: ComponentFixture<TarefasEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
