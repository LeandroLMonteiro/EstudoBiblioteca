import React from 'react';
import { ILivro } from '../../types/livro';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
  livros: ILivro[],
  selecionaLivro: (livroSelecionado: ILivro) => void 
}

function Lista({ livros, selecionaLivro }: Props) {
  return (
    <aside className={style.listaLivros}>
      <ul>
        {livros.map(item => (
          <Item
            selecionaLivro={selecionaLivro}
            key={item.isbn}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;