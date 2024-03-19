import { livroSchema } from "../types/Livro";



type Item = {
    item: typeof livroSchema;
    quantity: number;
    total: number;
}

type Carrinho = {
    idUsuario: string;
    total: number;
    items: Item[];
}

function calculaTotaldoItem(item: Item) {
    return item.item.price * item.quantity;
}

validaIsbnExistente(isbn: number): boolean {
    return livros.some(livro => livro.isbn === isbn);
}

function calculateTotaldoCarrinho(items: Carrinho[]) {
    return items.reduce((total, item) => { 
        return item.total + total 
    }, 0);
}

function validaIsbnExistente(isbn: number, carrinho: Carrinho): boolean {
    return carrinho.items.some(isbn => carrinho.items.item.isbn === isbn);

function adicionaLivro(item: Item, carrinho: Carrinho) {
    /**
     * 1. verificar se existe este livro no carrinho
     * > Para verificar, precisa   verificar se o cartItem.item.isbn === book.isbn
     * 1.1: Caso sim: incrementa em 1, a quantidade do CartItem.quantity
     *   > cart.items = cart.items.map(condicao)
     * 1.2: Caso não: cria um novo CartItem e adidiona no items do carrinho
     *   > cart.items.push(novoCartItem)
     */
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
}

export function criaCarrinho(token: string) {
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