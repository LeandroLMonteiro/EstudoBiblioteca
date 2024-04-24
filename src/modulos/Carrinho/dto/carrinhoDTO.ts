import { Injectable } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { validaUsuario } from '../decorators/validaUsuarioExiste';
import { UUID } from 'crypto';
import { IsbnExistente } from '../../Livro/Decorators/validaIsbnExistente';

Injectable();
export class ItemDTO {
  @IsbnExistente({ message: 'ISBN não cadastrado' })
  isbn: string;

  @IsInt()
  quantity: number;

  @IsNumber()
  total: number;
}

Injectable();
export class CarrinhoDTO {
  @IsUUID()
  id: string;

  @IsUUID()
  @validaUsuario({ message: 'Usuario inexistente' })
  idUsuario: UUID;

  @IsNumber()
  total: number;

  @ValidateNested()
  @IsArray()
  @Type(() => ItemDTO)
  items: ItemDTO[];
}
