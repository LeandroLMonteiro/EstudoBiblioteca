import { Injectable } from '@nestjs/common';
import { CategoriaRepository } from '../repository/categoria_repositorio';

@Injectable()
export class ValidadorCategoriaServices {
  constructor(private readonly categorias: CategoriaRepository) {}

  async validaCategoriaExistente(textoCategoria: string): Promise<boolean> {
    return await this.categorias.validaCategoriaExistente(textoCategoria);
  }

  async retornaSlugCategoria(textoCategoria: string) {
    return await this.categorias.retornaSlugCategoria(textoCategoria);
  }
}
