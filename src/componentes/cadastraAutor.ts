import { Autores } from "../repositorio/autor_repositorio.js";
import { autorSchema } from "../types/Autor.js";
import { Erro } from "../types/Error.js";

type CreateAutorInput = {
    nome: string;
    email: string;
    biografia: string;
};


type CreateAutorOutput = {
    success: boolean;
    autor: typeof autorSchema | null;
    erros: Erro[] | null;
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

    const novoAutor: typeof autorSchema = {
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