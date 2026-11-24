import { Component, Input } from '@angular/core';
import { ChaveQuarto } from '../chave-quarto/chave-quarto';
import { FichaQuarto } from '../ficha-quarto/ficha-quarto';
import { Quarto } from '../quarto.model';
import { QuartoService } from '../quarto.service';

@Component({
  selector: 'app-quadro-chaves',
  imports: [ChaveQuarto, FichaQuarto],
  templateUrl: './quadro-chaves.html',
  styleUrl: './quadro-chaves.css',
})
export class QuadroChaves {
  @Input() nomeHotel = '';
  @Input() cidade = '';
  @Input() nomeHospede = '';
  @Input() convenioAtivo = false;

  hospedes = 2;
  diarias = 2;
  somenteComChave = false;
  quartoNaFicha: Quarto | null = null;

  /** Unsplash, Licença Unsplash: unsplash.com/photos/photo-1500382017468-9049fed747ef */
  fotoRecepcao = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80';

  regrasDaCasa = [
    'Café da manhã colonial das 6h30 às 9h30, com pão caseiro e queijo da região.',
    'Estacionamento coberto para hóspedes, sem cobrança.',
    'Cancelamento sem custo até as 18h do dia da chegada.',
    'Lavanderia com máquina de lavar liberada no primeiro andar.',
    'Recepção atende das 6h às 23h; fora disso, a chave fica na portaria.',
  ];

  private readonly minimoHospedes = 1;
  private readonly maximoHospedes = 6;
  private readonly minimoDiarias = 1;
  private readonly maximoDiarias = 15;

  constructor(private readonly quartoService: QuartoService) {}

  /** O que aparece no quadro, respeitando a chave geral do balcão. */
  get quartosNoQuadro(): Quarto[] {
    return this.somenteComChave ? this.quartoService.listarComChave() : this.quartoService.listar();
  }

  get totalDeQuartos(): number {
    return this.quartoService.listar().length;
  }

  get quartosComChave(): number {
    return this.quartoService.listarComChave().length;
  }

  get quartosSeparados(): Quarto[] {
    return this.quartoService.listarSeparados();
  }

  get menorDiaria(): number {
    return this.quartoService.menorDiaria();
  }

  get hospedesNoMinimo(): boolean {
    return this.hospedes <= this.minimoHospedes;
  }

  get hospedesNoMaximo(): boolean {
    return this.hospedes >= this.maximoHospedes;
  }

  get diariasNoMinimo(): boolean {
    return this.diarias <= this.minimoDiarias;
  }

  get diariasNoMaximo(): boolean {
    return this.diarias >= this.maximoDiarias;
  }

  aumentarHospedes(): void {
    if (!this.hospedesNoMaximo) {
      this.hospedes++;
    }
  }

  diminuirHospedes(): void {
    if (!this.hospedesNoMinimo) {
      this.hospedes--;
    }
  }

  aumentarDiarias(): void {
    if (!this.diariasNoMaximo) {
      this.diarias++;
    }
  }

  diminuirDiarias(): void {
    if (!this.diariasNoMinimo) {
      this.diarias--;
    }
  }

  alternarChaveGeral(): void {
    this.somenteComChave = !this.somenteComChave;
  }

  abrirFicha(quarto: Quarto): void {
    this.quartoNaFicha = quarto;
  }

  fecharFicha(): void {
    this.quartoNaFicha = null;
  }

  tirarOuDevolverChave(quarto: Quarto): void {
    this.quartoService.alternarChave(quarto);
  }

  separarQuarto(quarto: Quarto): void {
    this.quartoService.alternarFavorito(quarto);
  }
}
