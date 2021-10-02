import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasCadastrarComponent } from './tarefas-cadastrar.component';

describe('TarefasCadastrarComponent', () => {
  let component: TarefasCadastrarComponent;
  let fixture: ComponentFixture<TarefasCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
