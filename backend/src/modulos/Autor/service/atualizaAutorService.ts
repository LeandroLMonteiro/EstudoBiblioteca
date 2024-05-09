import { Injectable } from '@nestjs/common';
import { AutorRepositorio } from '../repository/autor_repositorio';
import { AtualizaAutorDTO } from '../dto/Autor';

@Injectable()
export class AtualizaAutorService {
  constructor(private readonly autorRepositorio: AutorRepositorio) {}

  async atualizaAutor(id: string, dto: AtualizaAutorDTO) {
    return await this.autorRepositorio.atualizaAutor(id, dto);
  }
}
