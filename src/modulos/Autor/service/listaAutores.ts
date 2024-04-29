import { AutorEntity } from '../entity/autor.entity';
import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { AutorRepositorio } from '../repository/autor_repositorio';
import { ListaAutorLivrosDTO } from '../dto/Autor';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class ListarAutorService {
  constructor(
    private readonly autorRepositorio: AutorRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('Autor Controller');
  }

  async listarAutor(): Promise<AutorEntity[]> {
    return await this.autorRepositorio.listarTodos();
  }

  async listarAutorLivros(id: string) {
    const autorLivrosSalvos = await this.autorRepositorio.listarAutor(id);
    if (autorLivrosSalvos === null) {
      this.logger.logObjeto(HttpStatus.NOT_FOUND, 'Autor não Localizado', id);
      throw new NotFoundException('Autor não Localizado');
    }

    try {
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
      this.logger.logObjeto(
        HttpStatus.OK,
        'Livros do autor localizados',
        autorLivrosLista,
      );
      return autorLivrosLista;
    } catch (ex) {
      this.logger.error(ex);
    }
  }
}
