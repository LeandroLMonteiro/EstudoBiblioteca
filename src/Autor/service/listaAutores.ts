import { AutorEntity } from "../entity/Autor";
import { Injectable } from '@nestjs/common';
import { AutorRepositorio } from "../repository/autor_repositorio";


@Injectable()
export class ListarAutorService {

  constructor(
    private readonly autorRepositorio: AutorRepositorio
  ) {}

  async listarAutor(): Promise<AutorEntity[]> {
    return await this.autorRepositorio.listarTodos();
  }
}