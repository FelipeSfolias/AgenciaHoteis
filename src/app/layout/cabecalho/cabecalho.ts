import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {
  @Input() nomeHotel = '';
  @Input() cidade = '';
  @Input() nomeHospede = '';
  @Input() convenioAtivo = false;

  @Output() alternarConvenio = new EventEmitter<void>();

  menu = [
    { titulo: 'Quadro', destino: '#quadro' },
    { titulo: 'Recepção', destino: '#recepcao' },
    { titulo: 'Contato', destino: '#contato' },
  ];

  clicarConvenio(): void {
    this.alternarConvenio.emit();
  }
}
