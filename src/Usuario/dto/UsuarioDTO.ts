import { Injectable } from "@nestjs/common";
import { IsEmail, IsPhoneNumber, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EnderecoDTO } from "./EnderecoDTO";

@Injectable()
export class UsuarioDTO {

    @IsString()
    primeiroNome: string;
    
    @IsString()
    ultimoNome: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber()
    telefone: string;

    @IsString()
    cpf: string;
    
    @ValidateNested()
    @Type(() => EnderecoDTO)
    endereco: EnderecoDTO;
}