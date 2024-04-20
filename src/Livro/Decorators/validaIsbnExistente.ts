import {
  ValidationOptions,
  ValidatorConstraint,
  registerDecorator,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { LivroRepository } from '../repository/livro_repositorio';

@Injectable()
@ValidatorConstraint({ async: false })
export class IsbnNaoExiste {
  constructor(private livroRepository: LivroRepository) {}

  validate(value: any): boolean {
    const isbnExiste = this.livroRepository.validaIsbnExistente(value);
    return !!isbnExiste;
  }
}

export const IsbnNaoExistente = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: IsbnNaoExiste,
    });
  };
};

@Injectable()
@ValidatorConstraint({ async: false })
export class IsbnExiste {
  constructor(private livroRepository: LivroRepository) {}

  validate(value: any): boolean {
    const isbnExiste = this.livroRepository.validaIsbnExistente(value);
    return !isbnExiste;
  }
}

export const IsbnExistente = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: IsbnExiste,
    });
  };
};
