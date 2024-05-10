import { useState } from 'react';
import { ILivro } from '../../../types/livro';
import style from './Item.module.scss';

interface Props extends ILivro {
  selecionaLivro: (livroSelecionado: ILivro) => void
}

export default function Item(
  {
    isbn,
    titulo,
    data,
    categoriaId,
    preco,
    autorId,
    resumo,
    sumario,
    num_pagina,
    selecionado,
    selecionaLivro
  }: Props) {
    
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() => 
        selecionaLivro(
                    {
                      isbn,
                      data,
                      categoriaId,
                      preco,
                      autorId,
                      selecionado,
                      titulo,
                      resumo,
                      sumario,
                      num_pagina
                    }
                )}>
                  
      <h3>{titulo}</h3>
      <span>Isbn: {isbn}</span>
      <br></br>
      <span>Preço: R${preco}</span>
      {selecionado && 
        <span className={style.selecionado}>
          {categoriaId}
          <br></br>
          <textarea readOnly rows={7} cols={60}>{sumario}</textarea>
        </span>
      }
    </li>
  )
}