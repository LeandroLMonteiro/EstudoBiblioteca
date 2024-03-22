import { Livro } from "../../Livro/entity/Livro";



export type Item = {
    item: Livro;
    quantity: number;
    total: number;
}

export type Carrinho = {
    idUsuario: string;
    total: number;
    items: Item[];
}

function calculaTotaldoItem(item: Item) {
    return item.item.preco * item.quantity;
}


function calculateTotaldoCarrinho(items: Item[]) {
    return items.reduce((total, item) => { 
        return item.total + total 
    }, 0);
}

function validaIsbnExistente(isbn: number, carrinho: Carrinho): boolean {
    return carrinho.items.some(livro => livro.item.isbn === isbn);
}

function adicionaLivro(item: Item, carrinho: Carrinho) {
    /**
     * 1. verificar se existe este livro no carrinho
     * > Para verificar, precisa   verificar se o cartItem.item.isbn === book.isbn
     * 1.1: Caso sim: incrementa em 1, a quantidade do CartItem.quantity
     *   > cart.items = cart.items.map(condicao)
     * 1.2: Caso não: cria um novo CartItem e adidiona no items do carrinho
     *   > cart.items.push(novoCartItem)
     */

    if (validaIsbnExistente(item.item.isbn, carrinho)) {
                
        carrinho.items.map( (livro) => {
            if (livro.item.isbn == item.item.isbn) {
                livro.quantity += 1
                livro.total = calculaTotaldoItem(livro)
            }
        })

    }else {
        item.quantity = 1;
        item.total = calculaTotaldoItem(item);
        carrinho.items.push(item);

    };

    carrinho.total = calculateTotaldoCarrinho(carrinho.items);

}

function removeLivro(item: Item, carrinho: Carrinho) {
    /**
     * 1. verificar se existe este livro no carrinho
     * > Para verificar, precisa verificar se o cartItem.item.isbn === book.isbn
     * 1.1: Caso sim: decrementa em 1, a quantidade do CartItem.quantity
     *  > cart.items = cart.items.map(condicao)
     * 1.2: Caso sim e a quantidade do item for 1, remove o CartItem do Cart.
     *  > cart.items = cart.items.filter(condicao)
     * 1.3: Caso não: não faz nada
     */
    if (validaIsbnExistente(item.item.isbn, carrinho)) {
                carrinho.items.forEach(element => {
            if (element.item.isbn == item.item.isbn){
                if (element.quantity - 1 > 0) {
                    element.quantity -= 1 
                    element.total = calculaTotaldoItem(element)
                }else{
                    element.quantity = 0
                    element.total = 0
                }
            }
        });

        carrinho.items = carrinho.items.filter(function(livro) {return livro.quantity !== 0})

        carrinho.total = calculateTotaldoCarrinho(carrinho.items);

    }
}

export function criaCarrinho(token: string)
{
    const carrinho: Carrinho = {
        idUsuario: token,
        items: [],
        total: 0,
    }

    return {
        carrinho,
        adicionaLivro,
        removeLivro
    }
}