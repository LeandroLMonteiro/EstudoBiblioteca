import { HttpStatus, Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { LivroEntity } from '../entity/livro.entity';
import { CriaLivroDTO } from '../dto/livroDTO';
import { LivroRepository } from '../repository/livro_repositorio';
import { ValidarAutorService } from '../../Autor/service/validadoresAutor.service';
import { ValidadorCategoriaServices } from '../../Categoria/service/validadorCategoria.sevices';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class CadastraLivroServices {
  constructor(
    private livroRepository: LivroRepository,
    private readonly autorServices: ValidarAutorService,
    private readonly categoriaServices: ValidadorCategoriaServices,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('LivroController');
  }

  async cadastraLivro(data: CriaLivroDTO): Promise<LivroEntity> {
    const autorId = await this.autorServices.retornaAutorIdPeloNome(
      data.autorNome,
    );
    const categoriaId = await this.categoriaServices.retornaSlugCategoria(
      data.categoria,
    );
    const dataSemAutorCategoriaId: Omit<
      CriaLivroDTO,
      'autorNome' | 'categoria'
    > = data;

    const novoLivro: LivroEntity = {
      ...dataSemAutorCategoriaId,
      autorId,
      categoriaId,
    };

    try {
      await this.livroRepository.salvar(novoLivro);
      const mensagem = 'Livro adicionado com êxito';
      this.logger.logObjeto(HttpStatus.OK, mensagem, novoLivro);
      return novoLivro;
    } catch (ex) {
      this.logger.logObjeto(ex.status, ex.message, novoLivro);
    }

    return novoLivro;
  }

  async verificaPrecoCategoria(
    preco: number,
    categoria: string,
  ): Promise<boolean> {
    const categoriaLivreDistribuicao =
      slugify(categoria) === 'Livre-Distribuicao';
    return preco != 0 || (categoriaLivreDistribuicao && preco == 0);
  }
}
