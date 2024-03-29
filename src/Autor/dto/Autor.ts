import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { EmailNotExiste } from "../decorators/email-existente";

export class CriaAutorDTO {

    @IsNotEmpty({message:'Nome deve ser informado'})
    @IsString()
    nome: string;

    @IsEmail(undefined,{message: 'Email inválido'})
    @EmailNotExiste({message:'Email já cadastrado'})
    email: string;

    @IsString()
    @MinLength(100,{message: 'Biografia deve ter no mínimo 100 caracteres'})
    @MaxLength(500, {message: 'Biografia não deve ultrapassar 500 caracteres'})
    biografia: string;
    
}
