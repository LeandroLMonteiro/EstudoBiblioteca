import slugify from 'slugify';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoriaEntity } from '../entity/categoria.entity';
import { CategoriaDTO } from '../dto/categoriaDTO';

@Injectable()
export class CategoriaRepository {
  constructor(
    @InjectRepository(CategoriaEntity)
    private readonly categoriaRepository: Repository<CategoriaEntity>,
  ) {}

  async salvar(novaCategoria: CategoriaDTO) {
    const slug = slugify(novaCategoria.categoria, { lower: true });
    if (!(await this.validaCategoriaExistente(novaCategoria.categoria))) {
      await this.categoriaRepository.save({
        slug,
        ...novaCategoria,
      } as CategoriaEntity);
      return { slug, ...novaCategoria };
    } else
      return new BadRequestException(
        'Categoria já existe. Não foi possível o cadastro',
      );
  }

  async listarTodos() {
    return await this.categoriaRepository.find();
  }

  async remover(categoria: string) {
    const slug = slugify(categoria, { lower: true });

    if (await this.categoriaRepository.findOne({ where: { slug } })) {
      await this.categoriaRepository.delete({ slug });
    } else
      return new NotFoundException(
        'Categoria não existe. Não foi possível remover',
      );

    return await this.categoriaRepository.find();
  }

  async validaCategoriaExistente(textoCategoria: string): Promise<boolean> {
    const slug = slugify(textoCategoria, { lower: true });
    return !!(await this.categoriaRepository.findOne({ where: { slug } }));
  }

  async retornaSlugCategoria(textoCategoria: string) {
    const slug = slugify(textoCategoria, { lower: true });
    const slugLocalizado = await this.categoriaRepository.findOne({
      where: { slug },
    });
    if (slugLocalizado === null) {
      throw new NotFoundException('Slug de Categoria não existe');
    }
    return slugLocalizado.slug;
  }
}
