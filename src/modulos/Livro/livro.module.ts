import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LivroController } from './controller/livro.controller';
import { LivroRepository } from './repository/livro_repositorio';
import { AutorModule } from '../Autor/autor.module';
import { CategoriaModule } from '../Categoria/categoria.module';
import { ListaLivroServices } from './service/listaLivros';
import { CadastraLivroServices } from './service/cadastraLivro';
import { CriaLivroDTO } from './dto/livroDTO';
import { AutorExiste } from './Decorators/autorExistente';
import { CategoriaExiste } from './Decorators/categoriaExistente';
import { IsbnExiste, IsbnNaoExiste } from './Decorators/validaIsbnExistente';
import { ValidaPrecoCategoria } from './Decorators/verificaPrecoCategoria';
import { LivroEntity } from './entity/livro.entity';
import { AutenticacaoService } from '../Autenticacao/autenticacao.service';
import { CustomLoggerModule } from '../logger/logger.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([LivroEntity]),
    CategoriaModule,
    AutorModule,
    CustomLoggerModule,
  ],
  controllers: [LivroController],
  providers: [
    CadastraLivroServices,
    ListaLivroServices,
    LivroRepository,
    CriaLivroDTO,
    AutorExiste,
    CategoriaExiste,
    IsbnNaoExiste,
    ValidaPrecoCategoria,
    AutenticacaoService,
  ],
  exports: [IsbnNaoExiste, IsbnExiste, ListaLivroServices],
})
export class LivroModule {}
