import { Module } from '@nestjs/common';
import { LivroController } from './controller/livro.controller';
import { LivroRepository } from './repository/livro_repositorio';
import { AutorModule } from '../Autor/autor.module';
import { CategoriaModule } from '../Categoria/categoria.module';
import { ListaLivroServices } from './service/listaLivros';
import { CadastraLivroServices } from './service/cadastraLivro';
import { LivroDTO } from './dto/livroDTO';
import { AutorExiste } from './Decorators/autorExistente';
import { CategoriaExiste } from './Decorators/categoriaExistente';
import { IsbnNaoExiste } from './Decorators/validaIsbnExistente';
import { ValidaPrecoCategoria } from './Decorators/verificaPrecoCategoria';
import { AutorRepositorio } from 'src/Autor/repository/autor_repositorio';
import { CategoriaRepository } from 'src/Categoria/repository/categoria_repositorio';


@Module({
  imports: [CategoriaModule, AutorModule],
  controllers: [LivroController],
  providers: [CadastraLivroServices,
    ListaLivroServices,
    LivroRepository,
    LivroDTO,
    AutorExiste,
    CategoriaExiste,
    IsbnNaoExiste,
    ValidaPrecoCategoria,
    AutorRepositorio,
    CategoriaRepository
  ],
})
export class LivroModule {}