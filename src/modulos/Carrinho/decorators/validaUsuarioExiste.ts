import {
  ValidationOptions,
  ValidatorConstraint,
  registerDecorator,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../../Usuario/service/usuario.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class ValidaUsuario {
  constructor(private usuarioService: UsuarioService) {}

  async validate(value: any): Promise<boolean> {
    return await this.usuarioService.verificaUsuario(value);
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
