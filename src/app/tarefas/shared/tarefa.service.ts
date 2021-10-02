import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
    providedIn: 'root'
})
export class TarefaService {

    private INDEX_TAREFAS_STORAGE = 'tarefas';

    constructor() {
    }

    listarTodos(): Tarefa[] {
        const tarefas = localStorage[this.INDEX_TAREFAS_STORAGE];
        return tarefas ? JSON.parse(tarefas) : [];
    }

    cadastrar(tarefa: Tarefa): void {
        const tarefas = this.listarTodos();
        tarefa.id = new Date().getTime();
        tarefas.push(tarefa);
        localStorage[this.INDEX_TAREFAS_STORAGE] = JSON.stringify(tarefas);
    }

    buscarPorId(id: number): Tarefa {
        const tarefas = this.listarTodos();
        return tarefas.find(tarefa => tarefa.id === id);
    }

    atualizar(tarefa: Tarefa): void {
        const tarefas = this.listarTodos();
        tarefas.forEach((obj, index, objs) => {
            if (obj.id === tarefa.id) {
                objs[index] = tarefa;
            }
        });
        localStorage[this.INDEX_TAREFAS_STORAGE] = JSON.stringify(tarefas);
    }

    remover(id: number) {
        let tarefas = this.listarTodos();
        tarefas = tarefas.filter(tarefa => tarefa.id !== id);
        localStorage[this.INDEX_TAREFAS_STORAGE] = JSON.stringify(tarefas);
    }

    alterarStatus(id: number): void {
        const tarefas = this.listarTodos();
        tarefas.forEach((obj, index, objs) => {
            if (obj.id === id) {
                objs[index].concluida = !obj.concluida;
            }
        });
        localStorage[this.INDEX_TAREFAS_STORAGE] = JSON.stringify(tarefas);
    }
}
