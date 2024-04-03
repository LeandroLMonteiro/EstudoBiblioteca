import { Module } from '@nestjs/common';
import { CategoriaController } from './controller/categoria.controller';
import { CategoriaRepository } from './repository/categoria_repositorio';
import { CategoriaService } from './service/cadastraCategoria';
import { CategoriaDTO } from './dto/categoriaDTO';
import { ValidadorCategoriaServices } from './service/validadorCategoria.sevices';


@Module({
  imports: [],
  controllers: [CategoriaController],
  providers: [
    CategoriaService,
    CategoriaRepository,
    CategoriaDTO,
    ValidadorCategoriaServices
  ],
  exports: [ValidadorCategoriaServices]
})
export class CategoriaModule {}
