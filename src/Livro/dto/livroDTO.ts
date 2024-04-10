import { Injectable } from "@nestjs/common";
import { IsISBN, IsInt, IsNumber, IsString, MaxLength, Min, MinDate, MinLength  } from "class-validator";
import { Transform, Type } from 'class-transformer';
import { IsbnNaoExistente } from "../Decorators/validaIsbnExistente";
import { CategoriaExistente } from "../Decorators/categoriaExistente";
import { AutorExistente } from "../Decorators/autorExistente";
import { validaPreco } from "../Decorators/verificaPrecoCategoria";



@Injectable()
export class LivroDTO {
    @IsString()
    @MinLength(1, {message:"Título não pode ser vazio"})
    titulo: string;

    @IsString()
    @MinLength(1, {message:"Resumo não pode ser vazio"})
    @MaxLength(500, {message: "Resumo não deve ultrapassar 500 caracteres"})
    resumo: string;

    @IsString()
    @MinLength(100,{message: "Sumário deve ter no mínimo 100 caracteres"})
    sumario: string;

    @IsNumber()
    @validaPreco({message: "Preço deve ser informado. Livro não pertence a categoria de livre distribuição"})
    preco: number = 0;

    @IsInt()
    @Min(1,{message: "Número de página deve ser maior que 0"})
    num_pagina: number;

    @IsISBN()
    @IsbnNaoExistente({message:'ISBN já cadastrado'})
    isbn: string;

    @Transform(({ value }) => new Date(value))
    @MinDate(new Date(), {message: "Data deve estar no futuro"})
    data: Date;

    @CategoriaExistente({message:'Categoria inexistente'})
    categoria: string;

    @AutorExistente({message: 'Autor inexistente'})
    autorNome: string;

}

    