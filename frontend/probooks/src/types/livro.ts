export interface ILivro {

  isbn: string;
  titulo: string;
  resumo: string;
  sumario: string;
  preco: number;
  num_pagina: number;
  data: Date;
  categoriaId: string;
  autorId: string; // usar ValidarAutorService.retornaNomeAutor
  selecionado: boolean,

}
