import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quarto } from '../quarto.model';

@Component({
  selector: 'app-ficha-quarto',
  imports: [CurrencyPipe],
  templateUrl: './ficha-quarto.html',
  styleUrl: './ficha-quarto.css',
})
export class FichaQuarto {
  @Input({ required: true }) quarto!: Quarto;
  @Input() hospedes = 1;
  @Input() diarias = 1;
  @Input() convenioAtivo = false;

  @Output() fechar = new EventEmitter<void>();

  /** Total da estadia, já com o desconto de convênio quando ele está ativo. */
  get total(): number {
    const diaria = this.convenioAtivo ? this.quarto.precoDiaria * 0.9 : this.quarto.precoDiaria;
    return diaria * this.diarias;
  }

  get cabeOGrupo(): boolean {
    return this.quarto.capacidade >= this.hospedes;
  }
}
