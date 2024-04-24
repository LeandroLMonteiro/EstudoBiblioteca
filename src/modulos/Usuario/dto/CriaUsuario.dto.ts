import { Injectable, Optional } from '@nestjs/common';
import {
  IsEmail,
  IsInt,
  IsPhoneNumber,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

@Injectable()
export class CriaUsuarioDTO {
  @IsString()
  primeiroNome: string;

  @IsString()
  ultimoNome: string;

  @IsEmail()
  email: string;

  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W+)(.{6,30})$/, {
    message:
      'A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um dígito, um caractere especial e ter entre 8 e 30 caracteres',
  })
  senha: string;

  @IsPhoneNumber('BR')
  telefone: string;

  @IsString()
  cpf: string;

  @IsString()
  @MinLength(3)
  country: string;

  @IsString()
  @MinLength(2)
  estado: string;

  @IsString()
  @MinLength(3)
  cidade: string;

  @IsString()
  @MinLength(3)
  bairro: string;

  @IsString()
  @MinLength(3)
  endereco: string;

  @IsInt()
  @Optional()
  number: number;

  @IsString()
  @MinLength(3)
  @Optional()
  complemento: string;

  @IsString()
  cep: string;
}
