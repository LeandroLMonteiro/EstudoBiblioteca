import Autores from "../repositorio/autor_repositorio.js";
import { Autor, autorSchema } from "../types/Autor.js";

type CreateAutorInput = {
    nome: string;
    email: string;
    biografia: string;
};

type Error = {
    property: string;
    message: string;
}

type CreateAutorOutput = {
    success: boolean;
    autor: Autor | null;
    erros: Error[] | null;
}


export function cadastraAutor(data: CreateAutorInput): CreateAutorOutput {

    const result = autorSchema.safeParse(data);

    if(!result.success) {
        return {
            success: false,
            autor: null,
            erros: result.error.errors.map(error => ({
                property: error.path.toString(),
                message: error.message,
            }))
        }
    }

    if(Autores.validaEmailExistente(result.data.email)){
        return {
            success: false,
            autor: null,
            erros: [{
                property: "Chave Duplicada",
                message: "Email já existente",
            }]
        }
    }
 
    const novoAutor: Autor = {
        ...result.data,
        data: new Date(),
    };

    Autores.salvar(novoAutor);
    
    return {
        success: true,
        autor: novoAutor,
        erros: null,
    };
}