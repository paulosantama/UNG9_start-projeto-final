import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
    let service: CalculadoraService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CalculadoraService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('teste soma 4 + 1 = 5',
        inject([CalculadoraService], (service1: CalculadoraService) => {
            const soma = service1.calcular(4, 1, CalculadoraService.SOMA);
            expect(soma).toEqual(5);
        })
    );

    it('teste subtração 4 - 1 = 3',
        inject([CalculadoraService], (service1: CalculadoraService) => {
            const subtracao = service1.calcular(4, 1, CalculadoraService.SUBTRACAO);
            expect(subtracao).toEqual(3);
        })
    );

    it('teste divisão 4 / 2 = 2',
        inject([CalculadoraService], (service1: CalculadoraService) => {
            const divisao = service1.calcular(4, 2, CalculadoraService.DIVISAO);
            expect(divisao).toEqual(2);
        })
    );

    it('teste multiplicação 4 * 2 = 8',
        inject([CalculadoraService], (service1: CalculadoraService) => {
            const multiplicacao = service1.calcular(4, 2, CalculadoraService.MULTIPLICACAO);
            expect(multiplicacao).toEqual(8);
        })
    );

    it('teste operação inválida = 0',
        inject([CalculadoraService], (service1: CalculadoraService) => {
            const operacaoInvalida = service1.calcular(4, 2, '%');
            expect(operacaoInvalida).toEqual(0);
        })
    );
});
