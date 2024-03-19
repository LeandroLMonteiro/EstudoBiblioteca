import { Autores } from "../repositorio/autor_repositorio.js";
import { autorSchema } from "../types/Autor.js";


export function listaAutores(): typeof autorSchema[] {
    return Autores.listarTodos();
}