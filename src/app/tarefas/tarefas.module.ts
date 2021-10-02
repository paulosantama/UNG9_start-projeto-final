import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, TarefasTarefaConcluidaDirective } from './shared';
import { TarefasListarComponent } from './tarefas-listar';
import { TarefasCadastrarComponent } from './tarefas-cadastrar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TarefasEditarComponent } from './tarefas-editar';

@NgModule({
    declarations: [
        TarefasListarComponent,
        TarefasCadastrarComponent,
        TarefasEditarComponent,
        TarefasTarefaConcluidaDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    providers: [
        TarefaService
    ]
})
export class TarefasModule {
}
