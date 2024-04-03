import { Module } from '@nestjs/common';
import { UsuarioController } from './controller/Usuario.Controller';
import { CadastraUsuarioService } from './service/cadastraUsuario';
import { UsuarioRepository } from './repository/usuario_repositorio';
import { UsuarioDTO } from './dto/UsuarioDTO';
import { EnderecoDTO } from './dto/EnderecoDTO';
import { ValidaUsuarioService } from './service/validaUsuario.service';


@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [
    CadastraUsuarioService,
    UsuarioRepository,
    UsuarioDTO,
    EnderecoDTO,
    ValidaUsuarioService
    ],
  exports: [ValidaUsuarioService]
})
export class UsuarioModule {}