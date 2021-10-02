import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa, TarefaService } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-tarefas-editar',
    templateUrl: './tarefas-editar.component.html',
    styleUrls: ['./tarefas-editar.component.css']
})
export class TarefasEditarComponent implements OnInit {

    @ViewChild('formTarefa', {static: true})
    formTarefa: NgForm;

    tarefa: Tarefa;

    constructor(
        private tarefaService: TarefaService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.tarefa = this.tarefaService.buscarPorId(id);
    }

    atualizar(): void {
        if (this.formTarefa.form.valid) {
            this.tarefaService.atualizar(this.tarefa);
            this.router.navigate(['/tarefas']);
        }
    }

}
