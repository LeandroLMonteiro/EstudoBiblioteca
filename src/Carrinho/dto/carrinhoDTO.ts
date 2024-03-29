import { Injectable } from "@nestjs/common";
import { IsInt, IsNumber, IsString } from "class-validator";
import { LivroEntity } from "src/Livro/entity/Livro";

Injectable()
export class ItemDTO {
    item: LivroEntity;

    @IsInt()
    quantity: number;

    @IsNumber()
    total: number;
}

Injectable()
export class CarrinhoDTO {

    @IsString()
    idUsuario: string;
    
    @IsNumber()
    total: number;
    
    items: ItemDTO[];
}
