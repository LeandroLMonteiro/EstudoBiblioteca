import { Injectable } from '@nestjs/common';
import { AutorEntity } from '../entity/autor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AutorRepositorio {
  constructor(
    @InjectRepository(AutorEntity)
    private readonly autorRepository: Repository<AutorEntity>,
  ) {}

  async salvar(novoAutor: AutorEntity) {
    await this.autorRepository.save(novoAutor);
  }

  async listarTodos() {
    return await this.autorRepository.find();
  }

  async deletaAutor(id: string) {
    await this.autorRepository.delete(id);
  }

  async validaEmailExistente(email: string): Promise<boolean> {
    const emailLocalizado = await this.autorRepository.findOne({
      where: { email },
    });
    return !!emailLocalizado;
  }

  async validaAutorPeloNome(nome: string): Promise<boolean> {
    const nomeLocalizado = await this.autorRepository
      .createQueryBuilder('autor')
      .where('UPPER(autor.nome) = UPPER(:nome)', { nome: nome.toUpperCase() })
      .getOne();

    return !!nomeLocalizado;
  }

  async retornaAutorIdPeloNome(nome: string) {
    const nomeLocalizado = await this.autorRepository
      .createQueryBuilder('autor')
      .where('UPPER(autor.nome) = UPPER(:nome)', { nome: nome.toUpperCase() })
      .getOne();

    return nomeLocalizado.id;
  }
}
