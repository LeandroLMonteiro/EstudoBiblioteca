import React, { useEffect, useState } from 'react';
import { ILivro } from '../../types/livro';
import Botao from '../Botao';
import style from './Formulario.module.scss';

interface Props {
  setLivros: React.Dispatch<React.SetStateAction<ILivro[]>>
}


function Formulario({ setLivros }: Props) {
  const [livro, setlivro] = useState("");

  function useObterLivros () {
    useEffect(() => {
      fetch('/livro/listaLivros')
        .then((res) => res.json())
        .then((data) => setLivros(data));
    });
  }

  function listarlivro(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault(); 
    setlivro("");
  }

  return (
    <form className={style.novolivro} onSubmit={listarlivro}>
      <div className={style.inputContainer}>
        <label htmlFor="livro">
          Listagem dos Livros
        </label>
        <input
          type="text"
          name="livro"
          id="livro"
          value={livro}
          onChange={evento => setlivro(evento.target.value)}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <Botao type="submit" onClick={useObterLivros}>
        ListarLivro
      </Botao>
    </form>
  )
}

export default Formulario;