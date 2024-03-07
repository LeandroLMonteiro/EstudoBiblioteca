import { Livros } from "../repositorio/livro_repositorio.js";
import { Erro } from "../types/Error.js";
import { livroSchema } from "../types/Livro.js";

type CreateLivroInput = {
    titulo: string,
    resumo: string,
    sumario: string,
    preco: number,
    num_pagina: number,
    isbn: number,
    categoria: string,
    autor: string,
    data: Date
};

type CreatelivroOutput = {
    success: boolean;
    livro: typeof livroSchema | null;
    erros: Erro[] | null;
}


export function cadastraLivro(data: CreateLivroInput): CreatelivroOutput {

    const result = livroSchema.safeParse(data);

    if(!result.success) {
        return {
            success: false,
            livro: null,
            erros: result.error.errors.map(error => ({
                property: error.path.toString(),
                message: error.message,
            }))
        }
    }
 
    const novolivro: typeof livroSchema = {
        ...result.data
    };

    Livros.salvar(novolivro);
    
    return {
        success: true,
        livro: novolivro,
        erros: null,
    };
}