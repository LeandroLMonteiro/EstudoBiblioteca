import { Module } from '@nestjs/common';
import { CategoriaController } from './controller/categoria.controller';
import { CategoriaRepository } from './repository/categoria_repositorio';
import { CategoriaService } from './service/cadastraCategoria';
import { CategoriaDTO } from './dto/categoriaDTO';


@Module({
  imports: [],
  controllers: [CategoriaController],
  providers: [
    CategoriaService,
    CategoriaRepository,
    CategoriaDTO  
  ],
})
export class CategoriaModule {}
