import { Injectable } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsArray, IsInt, IsNumber, IsString, IsUUID, ValidateNested } from "class-validator";
import { validaUsuario } from "../decorators/validaUsuarioExiste";
import { UUID } from "crypto";
import { LivroEntity } from "src/Livro/entity/livro.entity";


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

    @IsUUID()
    @validaUsuario({message:'Usuario inexistente'})
    idUsuario: UUID;
    
    @IsNumber()
    total: number;
    
    @ValidateNested()
    @IsArray()
    @Type(() => ItemDTO)
    items: ItemDTO[];
}
