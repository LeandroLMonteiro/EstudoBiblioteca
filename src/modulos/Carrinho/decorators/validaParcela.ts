import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  registerDecorator,
} from 'class-validator';
import { CompraRepositorio } from '../repository/compra_repositorio';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint()
export class ValidaParcela {
  constructor(private compraRepositorio: CompraRepositorio) {}

  validate(value: any, validationArguments?: ValidationArguments): boolean {
    return this.compraRepositorio.verificaParcelas(
      validationArguments!.object['formaPagamento'],
      value,
    );
  }
}

export const validaParcela = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: ValidaParcela,
    });
  };
};
