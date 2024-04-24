import { Injectable, Optional } from '@nestjs/common';
import {
  IsEmail,
  IsInt,
  IsPhoneNumber,
  IsString,
  MinLength,
} from 'class-validator';

@Injectable()
export class UsuarioDTO {
  @IsString()
  primeiroNome: string;

  @IsString()
  ultimoNome: string;

  @IsEmail()
  email: string;

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
