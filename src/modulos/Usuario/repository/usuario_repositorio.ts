import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from '../entity/usuario.entity';
import { randomUUID } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriaUsuarioDTO } from '../dto/CriaUsuario.dto';
import { AtualizaUsuarioDTO } from '../dto/AtualizaUsuario.dto';

@Injectable()
export class UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async salvar(dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();
    const { primeiroNome, ultimoNome, ...dadosDoUsuarioRest } = dadosDoUsuario;
    const novoUsuario: UsuarioEntity = {
      id: randomUUID(),
      nome: `${primeiroNome} ${ultimoNome}`,
      ...dadosDoUsuarioRest,
    };

    Object.assign(usuarioEntity, novoUsuario);
    return await this.usuarioRepository.save(novoUsuario);
  }

  async atualizar(usuario: UsuarioEntity, novosDados: AtualizaUsuarioDTO) {
    Object.assign(usuario, novosDados as UsuarioEntity);
    return this.usuarioRepository.save(usuario);
  }

  async deletar(usuario: UsuarioEntity) {
    return await this.usuarioRepository.delete(usuario.id);
  }

  async listarTodos() {
    return await this.usuarioRepository.find();
  }

  async buscaPorEmail(email: string) {
    return await this.usuarioRepository.findOne({
      where: { email },
    });
  }

  async buscaUsuarioPeloId(id: string) {
    return await this.usuarioRepository.findOneBy({ id });
  }
}
