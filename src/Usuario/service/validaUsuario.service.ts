import { UUID, randomUUID } from 'crypto';
import { UsuarioRepository } from '../repository/usuario_repositorio';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidaUsuarioService {
  constructor(private usuarioRepositorio: UsuarioRepository) {}

  async verificaUsuario(usuarioId: UUID): Promise<boolean> {
    return await this.usuarioRepositorio.usuarioExiste(usuarioId);
  }
}
