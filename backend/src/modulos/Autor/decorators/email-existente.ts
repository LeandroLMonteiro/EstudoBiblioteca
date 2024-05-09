import {
  ValidationOptions,
  ValidatorConstraint,
  registerDecorator,
} from 'class-validator';
import { AutorRepositorio } from '../repository/autor_repositorio';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class emailNotExistente {
  constructor(private autorRepository: AutorRepositorio) {}

  async validate(value: any): Promise<boolean> {
    const autorExiste = await this.autorRepository.validaEmailExistente(value);
    return !autorExiste;
  }
}

export const EmailNotExiste = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: emailNotExistente,
    });
  };
};
