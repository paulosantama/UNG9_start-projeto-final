import { Routes } from '@angular/router';
import { TarefasListarComponent } from './tarefas-listar';
import { TarefasCadastrarComponent } from './tarefas-cadastrar';
import { TarefasEditarComponent } from './tarefas-editar';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: TarefasListarComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: TarefasCadastrarComponent
  },
  {
    path: 'tarefas/editar/:id',
    component: TarefasEditarComponent
  }
];
