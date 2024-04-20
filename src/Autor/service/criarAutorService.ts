import { Injectable } from '@nestjs/common';
import { AutorEntity } from '../entity/autor.entity';
import { AutorRepositorio } from '../repository/autor_repositorio';
import { CriaAutorDTO } from '../dto/Autor';

@Injectable()
export class CriarAutorService {
  constructor(private readonly autorRepositorio: AutorRepositorio) {}

  async cadastraAutor(data: CriaAutorDTO): Promise<AutorEntity> {
    const autorEntity = new AutorEntity();

    Object.assign(autorEntity, data as AutorEntity);

    await this.autorRepositorio.salvar(autorEntity);

    return autorEntity;
  }
}
