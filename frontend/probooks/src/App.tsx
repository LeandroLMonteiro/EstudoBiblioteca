import React, { useState } from 'react';
import Lista from './components/Lista';
import { ILivro } from './types/livro';
import style from './App.module.scss';
import logo from './logo.svg';
import Botao from './components/Botao';

function App() {
  const [livros, setLivros] = useState<ILivro[]>([]);
  const [selecionado, setSelecionado] = useState<ILivro>();
  const [jaCarregouLivros, setJaCarregouLivros] = useState(false);

  function selecionaLivro(livroSelecionado: ILivro) {
    setLivros(livrosAnteriores => livrosAnteriores.map(livro => ({
      ...livro,
      selecionado: livro.isbn === livroSelecionado.isbn ? true : false
    })))
    setSelecionado(livroSelecionado);
  }

  const requisicaoLivros = 'http://localhost:3000/livro/listaLivros';
  const opcoesLivros = {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MWY5YThhLTgyMTYtNGVjZS05OTkxLWRkZTE2YTExNGM0MSIsIm5vbWVVc3VhcmlvIjoidGVzdGUiLCJpYXQiOjE3MTQzOTY1OTEsImV4cCI6MTcxNDY1NTc5MX0.LFWarKMF7qJc7Yi5S1NCbAmRssseqmnP4s1AXkRHc1Q'
      }
    }

  function carregaLivros () {
    fetch(requisicaoLivros, opcoesLivros)
        .then((res) => {

          if(!res.ok) { return Promise.reject(new Error('Deu erro, se vira!')) }
  
          return res.json();
        })
        .then((data) => {
          setLivros(data);
          setJaCarregouLivros(true);
        })
        .catch(error => {
          setJaCarregouLivros(false);
          console.log(error.message)
        });
 };

  return (
    <><div className={style.App}>
      <img src={logo} className={style.AppLogo} alt="logo" />
      <h3>
        <br></br>
        ProBooks sua livraria virtual
      </h3>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <Botao type="submit" onClick={carregaLivros}>
        Lista os Livros
      </Botao>
    </div>
    <form className={style.Formulario}>
        {jaCarregouLivros && livros.length === 0 && <h3>Nenhum livro foi encontrado!</h3>}
        {!jaCarregouLivros && <h3>Clique no botão para carregar os livros</h3>}
        {jaCarregouLivros && <Lista livros={livros} selecionaLivro={selecionaLivro} />}
    </form></>
  );
}

export default App;
