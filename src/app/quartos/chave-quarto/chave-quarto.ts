import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quarto } from '../quarto.model';

@Component({
  selector: 'app-chave-quarto',
  imports: [CurrencyPipe],
  templateUrl: './chave-quarto.html',
  styleUrl: './chave-quarto.css',
})
export class ChaveQuarto {
  @Input({ required: true }) quarto!: Quarto;
  @Input() hospedes = 1;
  @Input() convenioAtivo = false;
  @Input() selecionado = false;
  /** Verdadeiro quando outra plaqueta está escolhida e esta deve recuar. */
  @Input() apagado = false;

  @Output() verFicha = new EventEmitter<Quarto>();
  @Output() alternarChave = new EventEmitter<Quarto>();
  @Output() alternarFavorito = new EventEmitter<Quarto>();

  /** O quarto só serve se couber o número de hóspedes escolhido no balcão. */
  get cabeOGrupo(): boolean {
    return this.quarto.capacidade >= this.hospedes;
  }

  /** Empresas com convênio pagam 10% a menos na diária. */
  get precoConvenio(): number {
    return this.quarto.precoDiaria * 0.9;
  }
}
