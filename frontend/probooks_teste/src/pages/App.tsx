import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ILivro } from '../types/livro';
import style from './App.module.scss';

function App() {
  const [livros, setLivros] = useState<ILivro[]>([]);

  function selecionaLivro(livroSelecionado: ILivro) {
    setLivros(livrosAnteriores => livrosAnteriores.map(livro => ({
      ...livro,
      selecionado: livro.isbn === livroSelecionado.isbn ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setLivros={setLivros} />
      <Lista
        livros={livros}
        selecionaLivro={selecionaLivro}
      />
    </div>
  );
}

export default App;
