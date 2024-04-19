import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  registerDecorator,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { CadastraLivroServices } from '../service/cadastraLivro';

@Injectable()
@ValidatorConstraint({ async: true })
export class ValidaPrecoCategoria {
  constructor(private livroService: CadastraLivroServices) {}

  async validate(value: any, validationArguments?: ValidationArguments) {
    return await this.livroService.verificaPrecoCategoria(
      value,
      await validationArguments.object['categoria'],
    );
  }
}

export const validaPreco = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: Object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: ValidaPrecoCategoria,
    });
  };
};
