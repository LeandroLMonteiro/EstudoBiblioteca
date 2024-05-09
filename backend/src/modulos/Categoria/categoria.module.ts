import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriaEntity } from './entity/categoria.entity';
import { CategoriaController } from './controller/categoria.controller';
import { CategoriaRepository } from './repository/categoria_repositorio';
import { CategoriaService } from './service/cadastraCategoria';
import { CategoriaDTO } from './dto/categoriaDTO';
import { ValidadorCategoriaServices } from './service/validadorCategoria.sevices';
import { CustomLoggerModule } from '../logger/logger.module';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaEntity]), CustomLoggerModule],
  controllers: [CategoriaController],
  providers: [
    CategoriaService,
    CategoriaRepository,
    CategoriaDTO,
    ValidadorCategoriaServices,
  ],
  exports: [ValidadorCategoriaServices, CategoriaService],
})
export class CategoriaModule {}
