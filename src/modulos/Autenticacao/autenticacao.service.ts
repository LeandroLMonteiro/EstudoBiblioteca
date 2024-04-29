import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/service/usuario.service';

export interface UsuarioPayload {
  id: string;
  nomeUsuario: string;
}

@Injectable()
export class AutenticacaoService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, senhaInserida: string) {
    const usuario = await this.usuarioService.buscaPorEmail(email);
    //const usuarioFoiAutenticado = await bcrypt.compare(
    //  senhaInserida,
    //  usuario.senha,
    //);

    const usuarioFoiAutenticado = senhaInserida === usuario.senha;

    if (!usuarioFoiAutenticado) {
      throw new UnauthorizedException('Email / Senha incorreto.');
    }

    const payload: UsuarioPayload = {
      id: usuario.id,
      nomeUsuario: usuario.nome,
    };

    return {
      token_acesso: await this.jwtService.signAsync(payload),
    };
  }
}
