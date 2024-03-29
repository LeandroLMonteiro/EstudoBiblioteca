import { Injectable } from "@nestjs/common";
import { EnderecoDTO } from "./EnderecoDTO";
import { IsEmail, IsPhoneNumber, IsString } from "class-validator";

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

    endereco: EnderecoDTO;
}