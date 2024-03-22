import { AutorEntity } from "../entity/Autor.js";
import { Injectable } from '@nestjs/common';
import { AutorRepositorio } from "../repository/autor_repositorio.js";


@Injectable()
export class ListarAutorService {

  constructor(
    private readonly autorRepositorio: AutorRepositorio
  ) {}

  async listarAutor(): Promise<AutorEntity[]> {
    return await this.autorRepositorio.listarTodos();
  }
}