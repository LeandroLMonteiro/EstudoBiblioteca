import { useEffect, useState } from 'react';
import Lista from '../components/Lista';
import { ILivro } from '../types/livro';
import style from './App.module.scss';
import logo from '../logo.svg';
import Botao from '../components/Botao';
import { useNavigate } from 'react-router-dom';

function App() {
  const [livros, setLivros] = useState<ILivro[]>([]);
  const [jaCarregouLivros, setJaCarregouLivros] = useState(false);
  
  const navigate = useNavigate();
  const livrosKey = 'livros-key';
  

  const leDadosSessionStorage = (chave: string) => {
    try {

      const dados = sessionStorage.getItem(chave);
      if (dados) {
        const dadosParseados = JSON.parse(dados);
        return dadosParseados ?? null;
      }

    } catch (error) {

      console.error('sem acesso ao sessionStorage');
    }
    
    return null;

  }

  useEffect(() => {
    const dadosLivros = leDadosSessionStorage(livrosKey)
    if (dadosLivros) {
      setLivros(dadosLivros);
      setJaCarregouLivros(true);
    }
  },[]);

  const requisicaoLivros = 'http://localhost:3000/livro/listaLivros';
  const opcoesLivros = {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MWY5YThhLTgyMTYtNGVjZS05OTkxLWRkZTE2YTExNGM0MSIsIm5vbWVVc3VhcmlvIjoidGVzdGUiLCJpYXQiOjE3MTQzOTY1OTEsImV4cCI6MTcxNDY1NTc5MX0.LFWarKMF7qJc7Yi5S1NCbAmRssseqmnP4s1AXkRHc1Q'
      }
    }
  
  function verCarrinho() {
    navigate('/carrinho');
  }

  function carregaLivros () {
    fetch(requisicaoLivros, opcoesLivros)
        .then((res) => {

          if(!res.ok) { return Promise.reject(new Error('Deu erro, se vira!')) }
  
          return res.json();
        })
        .then((data) => {

          const novosLivros = data.map((livro: ILivro[]) => ({ selecionado: false, ...livro}))
          
          setLivros(novosLivros);
          setJaCarregouLivros(true);
          try {
            sessionStorage.setItem(livrosKey, JSON.stringify(novosLivros));
          } catch (error) {
            console.error('não foi possível escrever no sessionStorage');
          }
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
      <Botao type="submit" onClick={verCarrinho}>
        Ver Carrinho
      </Botao>
    </div>
    <form className={style.Formulario}>
        {jaCarregouLivros && livros.length === 0 && <h3>Nenhum livro foi encontrado!</h3>}
        {!jaCarregouLivros && <h3>Clique no botão para carregar os livros</h3>}
        {jaCarregouLivros && <Lista livros={livros} />}
    </form></>
  );
}

export default App;
