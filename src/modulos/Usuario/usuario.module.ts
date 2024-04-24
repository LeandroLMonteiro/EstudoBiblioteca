import { Module } from '@nestjs/common';
import { UsuarioController } from './controller/Usuario.Controller';
import { UsuarioService } from './service/cadastraUsuario';
import { UsuarioRepository } from './repository/usuario_repositorio';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { ValidaUsuarioService } from './service/validaUsuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './entity/usuario.entity';
import { AutenticacaoService } from '../Autenticacao/autenticacao.service';
import { CustomLoggerModule } from '../logger/logger.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity]), CustomLoggerModule],
  controllers: [UsuarioController],
  providers: [
    UsuarioRepository,
    CriaUsuarioDTO,
    ValidaUsuarioService,
    AutenticacaoService,
    UsuarioService,
  ],
  exports: [ValidaUsuarioService, UsuarioService],
})
export class UsuarioModule {}
