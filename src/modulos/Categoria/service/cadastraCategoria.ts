import { HttpStatus, Injectable } from '@nestjs/common';
import { CategoriaRepository } from '../repository/categoria_repositorio';
import { CategoriaDTO } from '../dto/categoriaDTO';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class CategoriaService {
  constructor(
    private readonly categorias: CategoriaRepository,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('CategoriaController');
  }

  async cadastraCategoria(data: CategoriaDTO) {
    try {
      const categoriaSalva = await this.categorias.salvar(data);
      const mensagem = 'Categoria adicionada com êxito';
      this.logger.logObjeto(HttpStatus.OK, mensagem, categoriaSalva);
      return data;
    } catch (ex) {
      this.logger.logObjeto(ex.status, ex.message, data);
    }

    return data;
  }

  async listaCategoria(): Promise<CategoriaDTO[]> {
    return (await this.categorias.listarTodos()) as CategoriaDTO[];
  }

  async removeCategoria(data: string) {
    return await this.categorias.remover(data);
  }
}
