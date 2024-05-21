import { Injectable } from '@nestjs/common';
import { CarrinhoDTO, ItemDTO } from '../dto/carrinhoDTO';
import { ListaLivroServices } from '../../Livro/service/listaLivros';

@Injectable()
export class CarrinhoSevice {
  constructor(
    public carrinho: CarrinhoDTO,
    private readonly livroServices: ListaLivroServices,
  ) {
    this.carrinho.total = 0;
    this.carrinho.items = [];
  }

  private async calculaTotaldoItem(item: ItemDTO) {
    const livroEncontrado = await this.livroServices.listarLivro(item.isbn);
    if (livroEncontrado) {
      return livroEncontrado.preco * item.quantity;
    }
    return 0;
  }

  private calculateTotaldoCarrinho(items: ItemDTO[]) {
    return items.reduce((total, item) => item.total + total, 0);
  }

  async adicionaLivro(item: ItemDTO) {
    if (
      this.carrinho.items.find(
        (itemCarrinho) => itemCarrinho.isbn === item.isbn,
      ) === undefined
    ) {
      item.quantity ?? 1;
      item.total = await this.calculaTotaldoItem(item);

      this.carrinho.items.push(item);
    } else {
      const itensAtualizados = await Promise.all(
        this.carrinho.items.map(async (livroCarrinho) => {
          if (livroCarrinho.isbn === item.isbn) {
            livroCarrinho.quantity += item.quantity ?? 1;
            const tot = await this.calculaTotaldoItem(livroCarrinho);
            livroCarrinho.total = tot;
          }
          return livroCarrinho;
        }),
      );
      this.carrinho.items = itensAtualizados;
    }

    this.carrinho.total = this.calculateTotaldoCarrinho(this.carrinho.items);

    return this.carrinho;
  }

  async listCarrinho() {
    return this.carrinho;
  }

  async removeLivro(isbn: string) {
    const livro = await this.livroServices.listarLivro(isbn);
    if (livro) {
      this.carrinho.items.forEach(async (element) => {
        if (element.isbn === isbn) {
          if (element.quantity - 1 > 0) {
            element.quantity -= 1;
            element.total -= livro.preco;
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
      return this.carrinho;
    }
  }
}
