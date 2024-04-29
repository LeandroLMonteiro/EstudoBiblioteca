import { HttpStatus, Injectable } from '@nestjs/common';
import { AutorRepositorio } from '../repository/autor_repositorio';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class DeletaAutorService {
  constructor(
    private readonly autorRepositorio: AutorRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('AutorController');
  }

  async deletaAutor(id: string) {
    try {
      await this.autorRepositorio.deletaAutor(id);
      this.logger.logObjeto(HttpStatus.OK, 'Autor excluido', id);
      return id;
    } catch (ex) {
      this.logger.error(ex);
    }
  }
}
