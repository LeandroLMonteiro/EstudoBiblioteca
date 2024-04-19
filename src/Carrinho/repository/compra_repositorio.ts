import { Injectable } from '@nestjs/common';
import { CompraEntity } from '../entity/Compra';
import { FormaPagamento } from '../FormaPagamento';

@Injectable()
export class CompraRepositorio {
  private compras: CompraEntity[] = [];

  salvar(novaCompra: CompraEntity) {
    this.compras.push(novaCompra);
  }

  listarCompras() {
    return this.compras;
  }

  encontraCompraDoUsuario(idUsuario: string) {
    return this.compras.find((usuario) => {
      usuario.idUsuario === idUsuario;
    });
  }

  verificaParcelas(formaPagamento: FormaPagamento, parcelas: number): boolean {
    return (
      (formaPagamento == FormaPagamento.D && parcelas == 1) ||
      (formaPagamento == FormaPagamento.C && (parcelas <= 12 || parcelas >= 12))
    );
  }
}
