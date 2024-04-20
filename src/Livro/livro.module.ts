import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LivroController } from './controller/livro.controller';
import { LivroRepository } from './repository/livro_repositorio';
import { AutorModule } from '../Autor/autor.module';
import { CategoriaModule } from '../Categoria/categoria.module';
import { ListaLivroServices } from './service/listaLivros';
import { CadastraLivroServices } from './service/cadastraLivro';
import { LivroDTO } from './dto/livroDTO';
import { AutorExiste } from './Decorators/autorExistente';
import { CategoriaExiste } from './Decorators/categoriaExistente';
import { IsbnExiste, IsbnNaoExiste } from './Decorators/validaIsbnExistente';
import { ValidaPrecoCategoria } from './Decorators/verificaPrecoCategoria';
import { LivroEntity } from './entity/livro.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([LivroEntity]),
    CategoriaModule,
    AutorModule,
  ],
  controllers: [LivroController],
  providers: [
    CadastraLivroServices,
    ListaLivroServices,
    LivroRepository,
    LivroDTO,
    AutorExiste,
    CategoriaExiste,
    IsbnNaoExiste,
    ValidaPrecoCategoria,
  ],
  exports: [IsbnNaoExiste, IsbnExiste, ListaLivroServices],
})
export class LivroModule {}
