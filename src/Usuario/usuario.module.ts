import { Module } from '@nestjs/common';
import { UsuarioController } from './controller/Usuario.Controller';
import { CadastraUsuarioService } from './service/cadastraUsuario';
import { UsuarioRepository } from './repository/usuario_repositorio';
import { UsuarioDTO } from './dto/UsuarioDTO';
import { EnderecoDTO } from './dto/EnderecoDTO';


@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [
    CadastraUsuarioService,
    UsuarioRepository,
    UsuarioDTO,
    EnderecoDTO
    ],
})
export class UsuarioModule {}