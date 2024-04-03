import { Module } from '@nestjs/common';
import { ListarAutorService } from './service/listaAutores';
import { CriarAutorService } from './service/criarAutorService';
import { AutorRepositorio } from './repository/autor_repositorio';
import { AutorController } from './controller/autor.controller';
import { emailNotExistente } from './decorators/email-existente';
import { ValidarAutorService } from './service/validadoresAutor.service';

@Module({
  imports: [],
  controllers: [AutorController],
  providers: [
    ListarAutorService,
    CriarAutorService,
    AutorRepositorio,
    emailNotExistente,
    ValidarAutorService
  ],
  exports: [ValidarAutorService]
})
export class AutorModule {}
