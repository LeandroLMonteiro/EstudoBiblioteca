import { Livros } from "../repositorio/livro_repositorio.js";
import { livroSchema } from "../types/Livro.js";


export function listarLivros(): typeof livroSchema[] {
    return Livros.listarTodos();
}