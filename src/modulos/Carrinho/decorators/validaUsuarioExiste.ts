import {
  ValidationOptions,
  ValidatorConstraint,
  registerDecorator,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ValidaUsuarioService } from '../../Usuario/service/validaUsuario.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class ValidaUsuario {
  constructor(private validaUsuarioService: ValidaUsuarioService) {}

  async validate(value: any): Promise<boolean> {
    return await this.validaUsuarioService.verificaUsuario(value);
  }
}

export const validaUsuario = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: ValidaUsuario,
    });
  };
};
