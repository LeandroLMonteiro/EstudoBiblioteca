import { Module } from '@nestjs/common';
import { AutorModule } from './Autor/autor.module';
import { CarrinhoModule } from './Carrinho/carrinho.module';
import { LivroModule } from './Livro/livro.module';
import { CategoriaModule } from './Categoria/categoria.module';
import { UsuarioModule } from './Usuario/usuario.module';

@Module({
  imports: [
    AutorModule,
    CategoriaModule,
    LivroModule,
    UsuarioModule,
    CarrinhoModule
  ]
})
export class AppModule {}
