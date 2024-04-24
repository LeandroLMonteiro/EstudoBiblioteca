import { Injectable } from '@nestjs/common';
import { AutorRepositorio } from '../repository/autor_repositorio';

@Injectable()
export class ValidarAutorService {
  constructor(private readonly autor: AutorRepositorio) {}

  async validaEmailExistente(email: string): Promise<boolean> {
    return await this.autor.validaEmailExistente(email);
  }

  async validaAutorPeloNome(nome: string): Promise<boolean> {
    return await this.autor.validaAutorPeloNome(nome);
  }

  async retornaAutorIdPeloNome(nome: string) {
    return await this.autor.retornaAutorIdPeloNome(nome);
  }
}
