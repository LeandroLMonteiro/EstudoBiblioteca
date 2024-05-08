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
    autor,
    selecionado,
    selecionaLivro
  }: Props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() => selecionaLivro(
        {
          isbn,
          data,
          categoriaId,
          preco,
          autor,
          selecionado,
          resumo: '',
          sumario: '',
          num_pagina: 0,
          titulo: ''
        }
        )}
      >
      <h3>{titulo}</h3>
    </li>
  )
}