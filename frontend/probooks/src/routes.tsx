import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './Pages/App';
import Detalhe from './Pages/Detalhe';
import Carrinho from './Pages/Carrinho';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='livro/*' element={<Detalhe />} />
          <Route path='carrinho/*' element={<Carrinho />} />
        </Routes>
      </Router>
    </main>
  );
}