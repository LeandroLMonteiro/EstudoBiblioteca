import { useState } from 'react';
import { ILivro } from '../../../types/livro';
import Botao from '../../Botao';
import style from './Item.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ICarrinho } from '../../../types/carrinho';

interface Props extends ILivro {
  comprado: number;
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
    selecionado
  }: Props) {

    const navigate = useNavigate();
    const [livro, setLivro] = useState({ isbn,
      data,
      categoriaId,
      preco,
      autorId,
      titulo,
      resumo,
      sumario,
      num_pagina,
      selecionado: false
    });
    const [carrinho, setCarrinho] = useState<ICarrinho>();
    const carrinhoKey = 'carrinho-key';
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

    const mostraLivro = () => {
      setLivro({ isbn,
        data,
        categoriaId,
        preco,
        autorId,
        titulo,
        resumo,
        sumario,
        num_pagina,
        selecionado: false
      });

      const livros:ILivro[] = leDadosSessionStorage(livrosKey);
      if (livros) {
        const livrosAtualizados = livros.map(item => {
        if (item.isbn === livro.isbn) {
          return { ...item, selecionado: true };
        }
        if (item.isbn !== livro.isbn) {
          return { ...item, selecionado: false };
        }
        return item;
      });
      sessionStorage.setItem(livrosKey, JSON.stringify(livrosAtualizados));
    }      
      

      navigate('/livro', { state: { livro } });
    
    };

     const adiciona = () => {
      const isbn = livro.isbn;
      axios.post(
        'http://localhost:3000/carrinho/adicionaLivro',
        {"isbn":isbn, "quantity": 1},
      )
      .then((res) => {
        setCarrinho(res.data) as typeof carrinho;
        sessionStorage.setItem(carrinhoKey, JSON.stringify(res.data));
      }
      )
      .catch(erro => alert(`Livro não Adicionado \n ${erro}`))

    }
    const remove = () => {
      axios.request({
        url: `http://localhost:3000/carrinho/removeLivro/${livro.isbn}`,
        method: 'DELETE'
      })
      .then(res => {
        setCarrinho(res.data) as typeof carrinho;
        sessionStorage.setItem(carrinhoKey, JSON.stringify(res.data));
      }
      )
      .catch(erro => alert(`Livro não Adicionado \n ${erro}`))
    }

  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={mostraLivro}>
      <Botao type="submit" onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        adiciona();
      }}>
        +
      </Botao>
      <Botao type="submit" onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        remove();
      }}>
        -
      </Botao>
      <h3>{titulo}</h3>
      <span>Isbn: {isbn}</span>
      <br></br>
      <span>Preço: R${preco}</span>
    </li>
  )
}