/** Um quarto do hotel, como ele aparece no quadro de chaves da recepcao. */
export interface Quarto {
  numero: number;
  andar: string;
  categoria: string;
  descricao: string;
  imagem: string;
  precoDiaria: number;
  capacidade: number;
  metrosQuadrados: number;
  camas: string;
  disponivel: boolean;
  favorito: boolean;
  beneficios: string[];
}
