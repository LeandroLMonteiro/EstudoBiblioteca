import styles from './Detalhe.module.scss'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import Botao from '../components/Botao';

function Detalhe() {
    const location = useLocation();
    const {livro} = location.state;
    const navigate = useNavigate();

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
                <Botao type="submit" onClick={() => navigate('/', { state: { livro } })}>
                   {'<'} Voltar
                </Botao>
              </div>
              <form className={styles.formulario}>
                <div className={styles.container}>
                  <h1 className={styles.titulo}>
                    {livro.titulo}
                  </h1>
                  <div className={styles.conteudo}>
                    <span>
                      <p className={styles.descricao}>
                        <label>Resumo:</label>
                        {livro.resumo}
                      </p>
                      <p className={styles.descricao}>
                        <label>Sumário:</label>
                        {livro.sumario}
                      </p>
                      <p className={styles.descricao}>
                        <label>Categoria:</label>
                        {livro.categoriaId}
                      </p>
                    </span>
                  </div>
                </div>
              </form></>
            } />
        </Routes>);
}

export default Detalhe;
