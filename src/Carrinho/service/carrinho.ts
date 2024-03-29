import { Injectable } from "@nestjs/common";
import { CarrinhoDTO, ItemDTO } from "../dto/carrinhoDTO";

@Injectable()
export class CarrinhoSevice {
    
    constructor (
        public carrinho: CarrinhoDTO
    ) {}
    
    private calculaTotaldoItem(item: ItemDTO) {
        return item.item.preco * item.quantity;
    }
    
    
    private calculateTotaldoCarrinho(items: ItemDTO[]) {
        return items.reduce((total, item) => { 
            return item.total + total 
        }, 0);
    }
    
    private validaIsbnExistente(isbn: string): boolean {
        return this.carrinho.items.some(livro => livro.item.isbn === isbn);
    }

    encontraLivroPeloIsbn(isbn: string): ItemDTO {
        return this.carrinho.items.find(livro => livro.item.isbn === isbn);
    }
    
    adicionaLivro(item: ItemDTO) {
            
        if (this.validaIsbnExistente(item.item.isbn)) {
                    
            this.carrinho.items.map( (livro) => {
                if (livro.item.isbn == item.item.isbn) {
                    livro.quantity += 1
                    livro.total = this.calculaTotaldoItem(livro)
                }
            })
    
        }else {
            item.quantity = 1;
            item.total = this.calculaTotaldoItem(item);
            this.carrinho.items.push(item);
    
        };
    
        this.carrinho.total = this.calculateTotaldoCarrinho(this.carrinho.items);
    
    }
    
    removeLivro(item: ItemDTO) {
        if (this.validaIsbnExistente(item.item.isbn)) {
                    this.carrinho.items.forEach(element => {
                if (element.item.isbn == item.item.isbn){
                    if (element.quantity - 1 > 0) {
                        element.quantity -= 1 
                        element.total = this.calculaTotaldoItem(element)
                    }else{
                        element.quantity = 0
                        element.total = 0
                    }
                }
            });
    
            this.carrinho.items = this.carrinho.items.filter(function(livro) {return livro.quantity !== 0})
    
            this.carrinho.total = this.calculateTotaldoCarrinho(this.carrinho.items);
    
        }
    }
    
}
