import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ListarAutorService } from './service/listaAutores';
import { CriarAutorService } from './service/criarAutorService';
import { AutorRepositorio } from './repository/autor_repositorio';
import { AutorController } from './controller/autor.controller';
import { emailNotExistente } from './decorators/email-existente';
import { ValidarAutorService } from './service/validadoresAutor.service';
import { AutorEntity } from './entity/autor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AutorEntity])],
  controllers: [AutorController],
  providers: [
    ListarAutorService,
    CriarAutorService,
    AutorRepositorio,
    emailNotExistente,
    ValidarAutorService,
  ],
  exports: [ValidarAutorService],
})
export class AutorModule {}
