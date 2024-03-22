import { cadastraCompra } from "../src/componentes/cadastraCompra.js";
import { Carrinho, Item, criaCarrinho } from "../src/componentes/criaCarrinho.js"
import { add, sub } from "date-fns";
import { FormaPagamento } from "../src/types/FormaPagamento.js";

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

const novoItem2: Item = {
    item: livro2,
    quantity: 0,
    total: 0
}

criaCarrinho("Leandro");

criaCarrinho("Leandro").adicionaLivro(novoItem1,novoCarrinho);
criaCarrinho("Leandro").adicionaLivro(novoItem1,novoCarrinho);
criaCarrinho("Leandro").adicionaLivro(novoItem2,novoCarrinho);

let ordemCompra =  cadastraCompra(novoCarrinho, FormaPagamento.D, 12);
console.table(ordemCompra.erros);

ordemCompra =  cadastraCompra(novoCarrinho, FormaPagamento.C, 10);
if (ordemCompra.success) {
    
    console.log("Usuario:", ordemCompra.compra!.idUsuario, '\n',
    "Forma Pagamento:", ordemCompra.compra!.formaPagamento, '\n',
    "Data da Compra:", ordemCompra.compra!.dataCompra.toLocaleDateString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    }), '\n',
    "Numero de Parcelas:", ordemCompra.compra!.parcelas, '\n',
    "Valor da Parcela:", ordemCompra.compra!.valorParcela.toLocaleString("pt-br", { style: "currency", currency: "BRL" }), '\n',
    "Valor Total da Compra:", ordemCompra.compra!.total.toLocaleString("pt-br", { style: "currency", currency: "BRL" }), '\n',
    "Livros:");
    console.log(ordemCompra.compra?.items)

}else{
    console.table(ordemCompra.erros)
}





