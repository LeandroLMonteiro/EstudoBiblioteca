import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { EmailNotExiste } from '../decorators/email-existente';
import { PartialType } from '@nestjs/mapped-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CriaAutorDTO {
  @IsNotEmpty({ message: 'Nome deve ser informado' })
  @IsString()
  nome: string;

  @IsEmail(undefined, { message: 'Email inválido' })
  @EmailNotExiste({ message: 'Email já cadastrado' })
  email: string;

  @IsString()
  @MinLength(100, { message: 'Biografia deve ter no mínimo 100 caracteres' })
  @MaxLength(500, { message: 'Biografia não deve ultrapassar 500 caracteres' })
  biografia: string;
}

@Injectable()
export class AtualizaAutorDTO extends PartialType(CriaAutorDTO) {}

export class ListaDeLivrosDTO {
  isbn: string;
  titulo: string;
  resumo: string;
  sumario: string;
  preco: number;
  num_pagina: number;
  data: Date;
  categoriaId: string;
}

@Injectable()
export class ListaAutorLivrosDTO {
  constructor(
    readonly id: string,
    readonly nome: string,
    readonly email: string,
    readonly biografia: string,
    readonly livros: ListaDeLivrosDTO[],
  ) {}
}
