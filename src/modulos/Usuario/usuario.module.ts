import { Module } from '@nestjs/common';
import { UsuarioController } from './controller/Usuario.Controller';
import { UsuarioService } from './service/usuario.service';
import { UsuarioRepository } from './repository/usuario_repositorio';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './entity/usuario.entity';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { CustomLoggerModule } from '../logger/logger.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity]), CustomLoggerModule],
  controllers: [UsuarioController],
  providers: [
    UsuarioRepository,
    CriaUsuarioDTO,
    AtualizaUsuarioDTO,
    ListaUsuarioDTO,
    UsuarioService,
  ],
  exports: [UsuarioService],
})
export class UsuarioModule {}
