import { cadastraCategoria } from '../src/componentes/cadastraCategoria.ts';

(() => {
  let resultado: { success; categoria; erros } = cadastraCategoria({
    categoria: 'teste1',
  });

  console.log('ok', resultado);

  resultado = cadastraCategoria({
    categoria: 'teste',
  });

  console.log('ok', resultado);

  resultado = cadastraCategoria({
    categoria: 'teste',
  });

  console.log('nok', resultado);
})();
