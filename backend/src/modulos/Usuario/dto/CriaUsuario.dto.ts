import { Injectable } from '@nestjs/common';
import {
  IsEmail,
  IsInt,
  IsOptional,
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

  @IsOptional()
  @IsPhoneNumber('BR')
  telefone: string;

  @IsOptional()
  @IsString()
  cpf: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  country: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  estado: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  cidade: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  bairro: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  endereco: string;

  @IsInt()
  @IsOptional()
  number: number;

  @IsString()
  @MinLength(3)
  @IsOptional()
  complemento: string;

  @IsString()
  @IsOptional()
  cep: string;
}
