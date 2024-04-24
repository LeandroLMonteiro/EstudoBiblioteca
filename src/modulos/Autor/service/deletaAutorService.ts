import { Injectable } from '@nestjs/common';
import { AutorRepositorio } from '../repository/autor_repositorio';

@Injectable()
export class DeletaAutorService {
  constructor(private readonly autorRepositorio: AutorRepositorio) {}

  async deletaAutor(id: string) {
    return await this.autorRepositorio.deletaAutor(id);
  }
}
