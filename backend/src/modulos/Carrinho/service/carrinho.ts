import { Injectable } from '@nestjs/common';
import { CarrinhoDTO, ItemDTO } from '../dto/carrinhoDTO';
import { ListaLivroServices } from '../../Livro/service/listaLivros';

@Injectable()
export class CarrinhoSevice {
  constructor(
    public carrinho: CarrinhoDTO,
    private readonly livroServices: ListaLivroServices,
  ) {}

  private async calculaTotaldoItem(item: ItemDTO) {
    const livro = await this.livroServices.listarLivro(item.isbn);
    if (livro) {
      return livro.preco * item.quantity;
    }
    return 0;
  }

  private calculateTotaldoCarrinho(items: ItemDTO[]) {
    return items.reduce((total, item) => {
      return item.total + total;
    }, 0);
  }

  async adicionaLivro(item: ItemDTO) {
    const livro = await this.livroServices.listarLivro(item.isbn);
    if (livro) {
      this.carrinho.items.map(async (livro) => {
        if (livro.isbn == item.isbn) {
          livro.quantity += 1;
          livro.total = await this.calculaTotaldoItem(livro);
        }
      });
    } else {
      item.quantity = 1;
      item.total = await this.calculaTotaldoItem(item);
      this.carrinho.items.push(item);
    }

    this.carrinho.total = this.calculateTotaldoCarrinho(this.carrinho.items);
  }

  async removeLivro(isbn: string) {
    const livro = await this.livroServices.listarLivro(isbn);
    if (livro) {
      this.carrinho.items.forEach(async (element) => {
        if (element.isbn == isbn) {
          if (element.quantity - 1 > 0) {
            element.quantity -= 1;
            element.total = await this.calculaTotaldoItem(element);
          } else {
            element.quantity = 0;
            element.total = 0;
          }
        }
      });

      this.carrinho.items = this.carrinho.items.filter(function (livro) {
        return livro.quantity !== 0;
      });

      this.carrinho.total = this.calculateTotaldoCarrinho(this.carrinho.items);
    }
  }
}
