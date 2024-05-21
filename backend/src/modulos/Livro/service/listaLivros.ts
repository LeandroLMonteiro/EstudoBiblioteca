import { LivroRepository } from '../repository/livro_repositorio';
import { LivroEntity } from '../entity/livro.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListaLivroServices {
  constructor(private livroRepository: LivroRepository) {}

  async listarLivros(): Promise<LivroEntity[]> {
    return await this.livroRepository.listarTodos();
  }

  async listarLivro(isbn: string): Promise<LivroEntity> {
    return await this.livroRepository.listarLivro(isbn);
  }
}
