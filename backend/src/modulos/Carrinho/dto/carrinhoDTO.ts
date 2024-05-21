import { Injectable } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { validaUsuario } from '../decorators/validaUsuarioExiste';
import { UUID } from 'crypto';
import { IsbnExistente } from '../../Livro/Decorators/validaIsbnExistente';

Injectable();
export class ItemDTO {
  @IsbnExistente({ message: 'ISBN não cadastrado' })
  @IsString()
  isbn: string;

  @IsInt()
  @IsOptional()
  quantity: number;

  @IsNumber()
  @IsOptional()
  total: number;
}

Injectable();
export class CarrinhoDTO {
/*   @IsUUID()
  id: string; */

  @IsNumber()
  @IsOptional()
  total: number;

  @ValidateNested()
  @IsArray()
  @Type(() => ItemDTO)
  items: ItemDTO[];
}
