import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.html',
  styleUrl: './rodape.css',
})
export class Rodape {
  @Input() nomeHotel = '';
  @Input() cidade = '';

  anoAtual = new Date().getFullYear();
  endereco = 'Av. Brasil, 1120 — Centro';
  telefone = '(46) 3547-1120';
  email = 'reservas@hotelmarrecas.com.br';

  horarios = [
    { evento: 'Recepção', quando: 'Das 6h às 23h' },
    { evento: 'Check-in', quando: 'A partir das 13h' },
    { evento: 'Check-out', quando: 'Até as 11h' },
    { evento: 'Café da manhã', quando: 'Das 6h30 às 9h30' },
  ];
}
