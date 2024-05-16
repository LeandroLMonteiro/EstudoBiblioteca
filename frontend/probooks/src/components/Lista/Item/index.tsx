import { ILivro } from '../../../types/livro';
import style from './Item.module.scss';
import { useNavigate } from 'react-router-dom';

interface Props extends ILivro {
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
    const mostraLivro = () => {
      const livro = { isbn,
        data,
        categoriaId,
        preco,
        autorId,
        titulo,
        resumo,
        sumario,
        num_pagina,
        selecionado: false
      }

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

      const livrosKey = 'livros-key';
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

  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={mostraLivro}>
                  
      <h3>{titulo}</h3>
      <span>Isbn: {isbn}</span>
      <br></br>
      <span>Preço: R${preco}</span>
    </li>
  )
}