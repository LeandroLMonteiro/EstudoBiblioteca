import { FormaPagamento } from '../FormaPagamento';

export type CompraEntity = {
  idUsuario: string;
  //items: LivroDTO[],
  total: number;
  formaPagamento: FormaPagamento;
  parcelas: number;
  valorParcela: number;
  dataCompra: Date;
};
