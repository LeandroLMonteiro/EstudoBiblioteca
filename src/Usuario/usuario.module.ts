import { Module } from '@nestjs/common';
import { UsuarioController } from './controller/Usuario.Controller';
import { CadastraUsuarioService } from './service/cadastraUsuario';
import { UsuarioRepository } from './repository/usuario_repositorio';
import { UsuarioDTO } from './dto/UsuarioDTO';
import { ValidaUsuarioService } from './service/validaUsuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './entity/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController],
  providers: [
    CadastraUsuarioService,
    UsuarioRepository,
    UsuarioDTO,
    ValidaUsuarioService,
  ],
  exports: [ValidaUsuarioService],
})
export class UsuarioModule {}
