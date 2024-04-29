import { HttpStatus, Injectable } from '@nestjs/common';
import { AutorEntity } from '../entity/autor.entity';
import { AutorRepositorio } from '../repository/autor_repositorio';
import { CriaAutorDTO } from '../dto/Autor';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class CriarAutorService {
  constructor(
    private readonly autorRepositorio: AutorRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('AutorController');
  }

  async cadastraAutor(data: CriaAutorDTO): Promise<AutorEntity> {
    const autorEntity = new AutorEntity();

    Object.assign(autorEntity, data as AutorEntity);

    try {
      await this.autorRepositorio.salvar(autorEntity);
      this.logger.logObjeto(HttpStatus.OK, 'Autor criado', autorEntity);
    } catch (ex) {
      this.logger.logObjeto(ex.status, ex.message, autorEntity);
    }
    return autorEntity;
  }
}
