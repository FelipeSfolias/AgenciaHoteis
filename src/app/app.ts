import { Component } from '@angular/core';
import { Cabecalho } from './layout/cabecalho/cabecalho';
import { Rodape } from './layout/rodape/rodape';
import { QuadroChaves } from './quartos/quadro-chaves/quadro-chaves';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, QuadroChaves, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  nomeHotel = 'Hotel Marrecas';
  cidade = 'Ampére, Paraná';
  nomeHospede = 'Felipe';

  /** Convênio de empresa: enquanto está desligado, a tarifa cheia é a que vale. */
  convenioAtivo = false;

  alternarConvenio(): void {
    this.convenioAtivo = !this.convenioAtivo;
  }
}
