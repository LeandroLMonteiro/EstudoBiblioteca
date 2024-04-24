import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ValidadorCategoriaServices } from '../../Categoria/service/validadorCategoria.sevices';

@Injectable()
@ValidatorConstraint({ async: true })
export class CategoriaExiste implements ValidatorConstraintInterface {
  constructor(private categoriaServices: ValidadorCategoriaServices) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async validate(value: string, validationArguments?: ValidationArguments) {
    const retorno =
      await this.categoriaServices.validaCategoriaExistente(value);

    return retorno;
  }
}

export const CategoriaExistente = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: CategoriaExiste,
    });
  };
};
