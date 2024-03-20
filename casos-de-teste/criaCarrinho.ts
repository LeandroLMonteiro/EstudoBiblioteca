import { Carrinho, Item, criaCarrinho } from "../src/componentes/criaCarrinho.js"
import { add, sub } from "date-fns";

const livro1 = {
    titulo: "titulo",
    resumo: "resumo",
    sumario: "s".repeat(100),
    preco: 10.00,
    num_pagina: 5,
    isbn:125,
    categoria: "categoria",
    autor: "Leandro",
    data: add(new Date(), {days: 1})
};

const livro2 = {
    titulo: "titulo",
    resumo: "resumo",
    sumario: "s".repeat(100),
    preco: 10.00,
    num_pagina: 5,
    isbn:127,
    categoria: "categoria",
    autor: "Leandro",
    data: add(new Date(), {days: 1})
};

const novoItem1: Item = {
    item: livro1,
    quantity: 0,
    total: 0
}

const novoCarrinho:Carrinho = {
    idUsuario: "Leandro",
    total: 0,
    items: []

}

criaCarrinho("Leandro");

criaCarrinho("Leandro").adicionaLivro(novoItem1,novoCarrinho);
console.log("primeira compra", JSON.stringify(novoCarrinho));

console.log();

criaCarrinho("Leandro").adicionaLivro(novoItem1,novoCarrinho);
console.log("segunda compra", JSON.stringify(novoCarrinho));

console.log();

const novoItem2: Item = {
    item: livro2,
    quantity: 0,
    total: 0
}

criaCarrinho("Leandro").adicionaLivro(novoItem2,novoCarrinho);
console.log("terceira compra", JSON.stringify(novoCarrinho));

console.log();

criaCarrinho("Leandro").removeLivro(novoItem1,novoCarrinho);
console.log("remove segunda compra", JSON.stringify(novoCarrinho));

console.log();

criaCarrinho("Leandro").removeLivro(novoItem2,novoCarrinho);
console.log("remove terceira compra", JSON.stringify(novoCarrinho));

console.log();

criaCarrinho("Leandro").removeLivro(novoItem1,novoCarrinho);
console.log("remove primeira compra", JSON.stringify(novoCarrinho));
