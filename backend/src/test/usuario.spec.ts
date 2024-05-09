import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { useContainer } from 'class-validator';

describe('Usuario', () => {
  let appTest: INestApplication;
  let authToken: string;

  const usuarioNaoCriar = {
    primeiroNome: 'usuario1',
    ultimoNome: 'usuario1',
    email: 'usuario1@usuario.com',
    senha: 'showDeBola!123',
  };

  const usuarioCriar = {
    primeiroNome: 'usuario2',
    ultimoNome: 'usuario2',
    email: 'usuario2@usuario.com',
    senha: 'showDeBola!123',
  };

  let idUsuario;

  beforeAll(async () => {
    const appTestModule: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    appTest = appTestModule.createNestApplication();
    appTest.useGlobalPipes(new ValidationPipe());
    useContainer(appTest.select(AppModule), { fallbackOnErrors: true });
    await appTest.init();

    // Obter o token de autenticação
    const loginResponse = await request(appTest.getHttpServer())
      .post('/autenticacao/login')
      .send({
        email: 'teste@teste.com',
        senha: '$2b$10$nR9Ca0If.XBp2V7ga5on3Orf3fnIAzj4CLhlZ4yT13kAb1igDZBju',
      });

    authToken = loginResponse.body.token_acesso;
  });

  it(`/Post criar com erro`, async () => {
    const retorno = await request(appTest.getHttpServer())
      .post('/usuario/criar')
      .send(usuarioNaoCriar);

    expect(retorno.status).toBe(HttpStatus.BAD_REQUEST);
  });

  it(`/Post criar`, async () => {
    const retorno = await request(appTest.getHttpServer())
      .post('/usuario/criar')
      .send(usuarioCriar);

    expect(retorno.status).toBe(HttpStatus.CREATED);
    expect(retorno.body).toHaveProperty('id');
    expect(retorno.body.nome).toBe(
      `${usuarioCriar.primeiroNome} ${usuarioCriar.ultimoNome}`,
    );

    idUsuario = retorno.body.id;
  });

  it(`/Get`, async () => {
    const retorno = await request(appTest.getHttpServer())
      .get('/usuario')
      .set('Authorization', `Bearer ${authToken}`);

    const listaUsuarios = retorno.body.usuarios;
    expect(listaUsuarios).toBeInstanceOf(Array);
    expect(listaUsuarios.length).toBeGreaterThan(0);
  });

  it(`/Delete`, async () => {
    const retorno = await request(appTest.getHttpServer())
      .delete('/usuario/' + idUsuario)
      .set('Authorization', `Bearer ${authToken}`);

    expect(retorno.status).toBe(HttpStatus.OK);
  });

  afterAll(async () => {
    await appTest.close();
  });
});
