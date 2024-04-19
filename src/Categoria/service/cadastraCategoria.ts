import { Injectable } from '@nestjs/common';
import { CategoriaRepository } from '../repository/categoria_repositorio';
import { CategoriaDTO } from '../dto/categoriaDTO';

@Injectable()
export class CategoriaService {
  constructor(private readonly categorias: CategoriaRepository) {}

  async cadastraCategoria(data: CategoriaDTO) {
    return await this.categorias.salvar(data);
  }

  async listaCategoria(): Promise<CategoriaDTO[]> {
    return (await this.categorias.listarTodos()) as CategoriaDTO[];
  }

  async removeCategoria(data: string) {
    return await this.categorias.remover(data);
  }
}
