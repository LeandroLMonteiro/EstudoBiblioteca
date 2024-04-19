import { cadastraUsurario } from '../src/componentes/cadastraUsuario.js';

(() => {
  const { success, usuario, errors } = cadastraUsurario({
    primeiroNome: 'Flavio',
    ultimoNome: 'Almeida',
    telefone: '(21) 12345-6789',
    cpf: '123.456.789-10',
    email: 'flavio.almeida@mail.com',
    endereco: {
      country: 'Brazil',
      state: 'Rio de Janeiro',
      city: 'Rio de Janeiro',
      neighborhood: 'Copacabana',
      street: 'Não sei',
      number: '123',
      complement: 'Perto da praia',
      zipCode: '12345-123',
    },
  });
  console.log('Cadastra usuario sem erros', { success, usuario, errors });
})();

(() => {
  const { success, usuario, errors } = cadastraUsurario({
    primeiroNome: 'Flavio',
    ultimoNome: 'Almeida',
    telefone: '(21) 12345-6789',
    cpf: '123.456.789-10',
    email: 'flavio.almeidamail.com',
    endereco: {
      country: 'Brazil',
      state: 'Rio de Janeiro',
      city: 'Rio de Janeiro',
      neighborhood: 'Copacabana',
      street: 'Não sei',
      number: '123',
      complement: 'Perto da praia',
      zipCode: '12345-123',
    },
  });
  console.log('user com e-mail inválido', { success, usuario, errors });
})();

(() => {
  const { success, usuario, errors } = cadastraUsurario({
    primeiroNome: 'Flavio',
    ultimoNome: 'Almeida',
    telefone: '(21) 12345-6789',
    cpf: '123.456.78910-',
    email: 'flavio.almeida@mail.com',
    endereco: {
      country: 'Brazil',
      state: 'Rio de Janeiro',
      city: 'Rio de Janeiro',
      neighborhood: 'Copacabana',
      street: 'Não sei',
      number: '123',
      complement: 'Perto da praia',
      zipCode: '12345-123',
    },
  });
  console.log('user com cpf inválido', { success, usuario, errors });
})();
