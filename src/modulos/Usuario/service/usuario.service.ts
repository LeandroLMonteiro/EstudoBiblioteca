import { Injectable, NotFoundException } from '@nestjs/common';
import { ListaUsuarioDTO } from '../dto/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from '../dto/AtualizaUsuario.dto';
import { CriaUsuarioDTO } from '../dto/CriaUsuario.dto';
import { UsuarioRepository } from '../repository/usuario_repositorio';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async criaUsuario(dadosDoUsuario: CriaUsuarioDTO) {
    return this.usuarioRepository.salvar(dadosDoUsuario);
  }

  async listUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.listarTodos();
    if (!usuariosSalvos) {
      return {};
    }
    const usuariosLista = usuariosSalvos.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome, usuario.email),
    );
    return usuariosLista;
  }

  async buscaPorEmail(email: string) {
    const checkEmail = await this.usuarioRepository.buscaPorEmail(email);

    if (checkEmail === null)
      throw new NotFoundException('O email não foi encontrado.');

    return checkEmail;
  }

  async atualizaUsuario(id: string, novosDados: AtualizaUsuarioDTO) {
    const usuario = await this.usuarioRepository.buscaUsuarioPeloId(id);

    if (usuario === null)
      throw new NotFoundException('O usuário não foi encontrado.');

    return this.usuarioRepository.atualizar(usuario, novosDados);
  }

  async deletaUsuario(id: string) {
    const usuario = await this.usuarioRepository.buscaUsuarioPeloId(id);

    if (!usuario) {
      throw new NotFoundException('O usuário não foi encontrado');
    }

    await this.usuarioRepository.deletar(usuario);

    return usuario;
  }

  async verificaUsuario(usuarioId: string): Promise<boolean> {
    return !!(await this.usuarioRepository.buscaUsuarioPeloId(usuarioId));
  }
}
