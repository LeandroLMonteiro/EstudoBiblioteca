import { Injectable, NotFoundException } from '@nestjs/common';
import { AutorEntity } from '../entity/autor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AtualizaAutorDTO } from '../dto/Autor';

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

  async listarAutor(id: string) {
    const autor = await this.autorRepository.find({
      where: { id: id },
      relations: { livros: true },
    });

    if (autor === null) {
      new NotFoundException('Autor não localizado');
    }

    return autor;
  }

  async deletaAutor(id: string) {
    const deletou = await this.autorRepository.delete(id);
    if (!deletou.affected) {
      throw new NotFoundException('Autor não encontrado');
    }
  }

  async atualizaAutor(id: string, dto: AtualizaAutorDTO) {
    const autor = await this.autorRepository.findOneBy({ id });
    if (autor === null) {
      throw new NotFoundException('Autor não encontrado');
    }
    Object.assign(autor, dto as AutorEntity);

    return this.autorRepository.save(autor);
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

    if (nomeLocalizado === null) {
      throw new NotFoundException('Autor não localizado');
    }

    return nomeLocalizado.id;
  }
}
