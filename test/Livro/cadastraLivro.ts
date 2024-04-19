import { cadastraLivro } from '../src/componentes/cadastraLivro.ts';
import { cadastraAutor } from '../src/componentes/cadastraAutor.ts';
import { cadastraCategoria } from '../src/componentes/cadastraCategoria.ts';
import { add, sub } from 'date-fns';
import { listarLivros } from '../src/componentes/listaLivros.ts';

(() => {
  cadastraAutor({
    nome: 'Leandro',
    email: 'Leandro@teste.com',
    biografia: 'a'.repeat(102),
  });

  let retorno: { success; livro; erros } = cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 5,
    isbn: 125,
    categoria: 'categoria',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });
  console.log('valida categoria não cadstrada', retorno);

  cadastraCategoria({ categoria: 'Livre Distribuição' });
  cadastraCategoria({ categoria: 'categoria' });

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 5,
    isbn: 125,
    categoria: 'Livre Distribuição',
    autor: 'Alexandre',
    data: add(new Date(), { days: 1 }),
  });
  console.log('valida autor não cadastrado', retorno);

  retorno = cadastraLivro({
    titulo: '',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 5,
    isbn: 126,
    categoria: 'categoria',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });
  console.log('valida título', retorno);

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: '',
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 5,
    isbn: 127,
    categoria: 'categoria',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });
  console.log('valida resumo', retorno);

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: 'k'.repeat(501),
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 5,
    isbn: 128,
    categoria: 'categoria',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });
  console.log('valida resumo', retorno);

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: '',
    preco: 10.0,
    num_pagina: 5,
    isbn: 129,
    categoria: 'categoria',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });
  console.log('valida sumario', retorno);

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 0.0,
    num_pagina: 5,
    isbn: 130,
    categoria: 'categoria',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });
  console.log('valida preco', retorno);

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 0.0,
    num_pagina: 5,
    isbn: 131,
    categoria: 'Livre Distribuição',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });
  console.log('valida preco 0 Livre Distribuicao Sucesso', retorno);

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 5,
    isbn: 132,
    categoria: 'categoria',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });
  console.log(
    'valida preco 10 categoria difere Livre Distribuicao Sucesso',
    retorno,
  );

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 0,
    isbn: 133,
    categoria: 'categoria',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });
  console.log('valida num pagina', retorno);

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 5,
    isbn: 133,
    categoria: 'categoria',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });
  console.log('valida num pagina sucesso', retorno);

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 5,
    isbn: 133,
    categoria: 'categoria',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });

  console.log('valida isbn', retorno);

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 5,
    isbn: 135,
    categoria: '',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });
  console.log('valida categoria', retorno);

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 5,
    isbn: 136,
    categoria: 'categoria',
    autor: 'Alexandre',
    data: add(new Date(), { days: 1 }),
  });
  console.log('valida autor', retorno);

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 5,
    isbn: 137,
    categoria: 'categoria',
    autor: 'Alexandre',
    data: sub(new Date(), { days: 1 }),
  });
  console.log('valida autor', retorno);

  retorno = cadastraLivro({
    titulo: 'titulo',
    resumo: 'resumo',
    sumario: 's'.repeat(100),
    preco: 10.0,
    num_pagina: 5,
    isbn: 138,
    categoria: 'categoria',
    autor: 'Leandro',
    data: add(new Date(), { days: 1 }),
  });
  console.log('caso ok', retorno);

  const livros = listarLivros();
  console.log(
    'repositorio somente com as cadastros ok 131, 132, 133 e 138',
    livros,
  );
})();
