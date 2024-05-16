import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './Pages/App';
import Detalhe from './Pages/Detalhe';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='livro/*' element={<Detalhe />} />
        </Routes>
      </Router>
    </main>
  );
}