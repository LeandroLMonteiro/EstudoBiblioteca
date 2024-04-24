import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  registerDecorator,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ValidarAutorService } from '../../Autor/service/validadoresAutor.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class AutorExiste {
  constructor(private validaAutorService: ValidarAutorService) {}

  async validate(
    value: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const resultado = await this.validaAutorService.validaAutorPeloNome(value);
    return resultado;
  }
}

export const AutorExistente = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: AutorExiste,
    });
  };
};
