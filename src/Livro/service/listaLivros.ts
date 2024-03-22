import { Livros } from "../repository/livro_repositorio.js";
import { livroSchema } from "../entity/Livro.js";


export function listarLivros(): typeof livroSchema[] {
    return Livros.listarTodos();
}