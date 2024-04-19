import { cadastraLivro } from '../src/componentes/cadastraLivro.ts';
import { listarLivros } from '../src/componentes/listaLivros.ts';
import { cadastraAutor } from '../src/componentes/cadastraAutor.ts';
import { cadastraCategoria } from '../src/componentes/cadastraCategoria.ts';
import { add } from 'date-fns';

(() => {
  const livros = listarLivros();
  console.log('repositorio vazio', livros);
})();

(() => {
  cadastraAutor({
    nome: 'Leandro',
    email: 'Leandro@teste.com',
    biografia: 'a'.repeat(102),
  });

  cadastraCategoria({
    categoria: 'Livre Distribuição',
  });

  cadastraCategoria({
    categoria: 'Lindo Demais',
  });

  cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 0.0,
    num_pagina: 5,
    isbn: 125,
    categoria: 'Livre Distribuição',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });

  cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 5,
    isbn: 126,
    categoria: 'Lindo Demais',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });

  const livros = listarLivros();
  console.log('repositorio com 2 livros cadastrados', livros);
})();
