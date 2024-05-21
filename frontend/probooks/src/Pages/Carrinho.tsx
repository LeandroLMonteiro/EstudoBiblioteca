import styles from './Carrinho.module.scss'
import { Routes, Route, useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import Botao from '../components/Botao';
import { ICarrinho } from '../types/carrinho';
import { useEffect, useState } from 'react';

function Detalhe() {
    const navigate = useNavigate();
    const carrinhoKey = 'carrinho-key';
    const [carrinho, setCarrinho] = useState<ICarrinho>();

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
        const dadosCarrinho = leDadosSessionStorage(carrinhoKey)
        if (dadosCarrinho) {
          setCarrinho(dadosCarrinho);
        }
      },[]);

    return (
        <Routes>
          <Route index element={
              <>
              <div className={styles.container}>
                <img src={logo} className={styles.logo} alt="logo" />
                <h3>
                  <br></br>
                  ProBooks sua livraria virtual
                </h3>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Botao id="voltar" type="submit" onClick={() => navigate('/', { state: { carrinho } })}>
                   Voltar
                </Botao>
              </div>
              <form className={styles.formulario}>
                <div className={styles.container}>
                  <h1 className={styles.titulo}>
                    Total: {carrinho && carrinho.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </h1>
                  <div className={styles.conteudo}>
                    <ul>
                        {carrinho && carrinho.items.map(item => (
                            <li>
                                <span className={styles.descricao}>
                                    <label>Isbn:</label>
                                    {item.isbn}
                                </span>
                                <span className={styles.descricao}>
                                    <label>Quantidade:</label>
                                    {item.quantity} 
                                </span>
                                <span className={styles.descricao}>
                                    <label>Total por Livro:</label>
                                    {item.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
                                </span>
                            </li>
                         
                         ))}
                    </ul>
                  </div>
                </div>
              </form></>
            } />
        </Routes>);
}

export default Detalhe;
