import { AutorEntity } from '../entity/autor.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AutorRepositorio } from '../repository/autor_repositorio';
import { ListaAutorLivrosDTO } from '../dto/Autor';
import { ListaLivroServices } from 'src/Livro/service/listaLivros';

@Injectable()
export class ListarAutorService {
  constructor(
    private readonly autorRepositorio: AutorRepositorio,
    private readonly listaLivroServices: ListaLivroServices,
  ) {}

  async listarAutor(): Promise<AutorEntity[]> {
    return await this.autorRepositorio.listarTodos();
  }

  async listarAutorLivros(id: string) {
    const autorLivrosSalvos = await this.autorRepositorio.listarAutor(id);
    if (autorLivrosSalvos === null) {
      throw new NotFoundException('Autor não Loicalizado');
    }

    const autorLivrosLista = autorLivrosSalvos.map(
      (autor) =>
        new ListaAutorLivrosDTO(
          autor.id,
          autor.nome,
          autor.email,
          autor.biografia,
          autor.livros,
        ),
    );

    return autorLivrosLista;
  }
}
