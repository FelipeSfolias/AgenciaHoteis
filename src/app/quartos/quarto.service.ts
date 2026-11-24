import { Injectable } from '@angular/core';
import { Quarto } from './quarto.model';

/**
 * Guarda os quartos do hotel e as operações que a recepção faz sobre eles.
 * Os componentes apenas leem esta lista e pedem as alterações por aqui.
 *
 * Procedência das fotografias — todas do Unsplash, sob a Licença Unsplash.
 * A página de cada foto, com o nome do autor, fica em
 * https://unsplash.com/photos/<id>:
 *
 *   101  photo-1540518614846-7eded433c457
 *   102  photo-1595576508898-0ad5c879a061
 *   103  photo-1522708323590-d24dbb6b0267
 *   201  photo-1611892440504-42a792e24d32
 *   202  photo-1582719478250-c89cae4dc85b
 *   203  photo-1618773928121-c32242e63f39
 *
 * As fotos ilustram o trabalho; não retratam um hotel real.
 */
@Injectable({ providedIn: 'root' })
export class QuartoService {
  private readonly quartos: Quarto[] = [
    {
      numero: 101,
      andar: 'Térreo',
      categoria: 'Standard casal',
      descricao:
        'Quarto de frente para a rua, com ar-condicionado split. É o mais pedido por quem chega tarde e sai cedo.',
      imagem: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80',
      precoDiaria: 190,
      capacidade: 2,
      metrosQuadrados: 16,
      camas: '1 cama de casal',
      disponivel: true,
      favorito: false,
      beneficios: [
        'Café da manhã colonial das 6h30 às 9h30',
        'Wi-Fi em todo o prédio',
        'Ar-condicionado split',
        'TV a cabo',
        'Estacionamento coberto',
      ],
    },
    {
      numero: 102,
      andar: 'Térreo',
      categoria: 'Standard duplo',
      descricao:
        'Duas camas separadas e ventilador de teto. Costuma ficar com duplas que viajam a trabalho.',
      imagem: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=900&q=80',
      precoDiaria: 190,
      capacidade: 2,
      metrosQuadrados: 18,
      camas: '2 camas de solteiro',
      disponivel: true,
      favorito: false,
      beneficios: [
        'Café da manhã colonial das 6h30 às 9h30',
        'Wi-Fi em todo o prédio',
        'Ventilador de teto',
        'Mesa de trabalho',
        'Estacionamento coberto',
      ],
    },
    {
      numero: 103,
      andar: 'Térreo',
      categoria: 'Apartamento com cozinha',
      descricao:
        'Tem cozinha com fogão e geladeira. Feito para quem fica a semana inteira na cidade.',
      imagem: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80',
      precoDiaria: 260,
      capacidade: 3,
      metrosQuadrados: 26,
      camas: '1 cama de casal e 1 sofá-cama',
      disponivel: true,
      favorito: false,
      beneficios: [
        'Café da manhã colonial das 6h30 às 9h30',
        'Wi-Fi em todo o prédio',
        'Cozinha com fogão e geladeira',
        'Máquina de lavar no andar',
        'Estacionamento coberto',
      ],
    },
    {
      numero: 201,
      andar: 'Primeiro andar',
      categoria: 'Casal superior',
      descricao: 'Cama queen e janela para os fundos, longe do barulho da avenida.',
      imagem: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&q=80',
      precoDiaria: 240,
      capacidade: 2,
      metrosQuadrados: 20,
      camas: '1 cama queen',
      disponivel: true,
      favorito: false,
      beneficios: [
        'Café da manhã colonial das 6h30 às 9h30',
        'Wi-Fi em todo o prédio',
        'Ar-condicionado split',
        'Frigobar',
        'Estacionamento coberto',
      ],
    },
    {
      numero: 202,
      andar: 'Primeiro andar',
      categoria: 'Família',
      descricao: 'O maior do andar. Cabe família com duas crianças sem apertar.',
      imagem: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80',
      precoDiaria: 320,
      capacidade: 4,
      metrosQuadrados: 28,
      camas: '1 cama de casal e 2 camas de solteiro',
      disponivel: false,
      favorito: false,
      beneficios: [
        'Café da manhã colonial para quatro pessoas',
        'Wi-Fi em todo o prédio',
        'Ar-condicionado split',
        'Berço sob pedido',
        'Estacionamento coberto',
      ],
    },
    {
      numero: 203,
      andar: 'Primeiro andar',
      categoria: 'Suíte',
      descricao: 'Quarto de canto, com sala separada e frigobar abastecido.',
      imagem: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80',
      precoDiaria: 380,
      capacidade: 3,
      metrosQuadrados: 32,
      camas: '1 cama king e 1 sofá-cama',
      disponivel: true,
      favorito: false,
      beneficios: [
        'Café da manhã servido no quarto',
        'Wi-Fi em todo o prédio',
        'Ar-condicionado split',
        'Sala de estar separada',
        'Frigobar abastecido',
        'Estacionamento coberto',
      ],
    },
  ];

  /** Todos os quartos, na ordem em que aparecem no quadro. */
  listar(): Quarto[] {
    return this.quartos;
  }

  /** Apenas os quartos que ainda têm a chave no gancho. */
  listarComChave(): Quarto[] {
    return this.quartos.filter((quarto) => quarto.disponivel);
  }

  /** Os quartos que o visitante separou com o anel vermelho. */
  listarSeparados(): Quarto[] {
    return this.quartos.filter((quarto) => quarto.favorito);
  }

  /** Menor diária da casa. */
  menorDiaria(): number {
    return Math.min(...this.quartos.map((quarto) => quarto.precoDiaria));
  }

  /** Tira a chave do gancho ou devolve ela. */
  alternarChave(quarto: Quarto): void {
    quarto.disponivel = !quarto.disponivel;
  }

  /** Marca ou tira o anel vermelho da chave. */
  alternarFavorito(quarto: Quarto): void {
    quarto.favorito = !quarto.favorito;
  }
}
