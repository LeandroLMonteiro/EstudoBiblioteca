import Autores from "../repositorio/autor_repositorio.js";
import { Autor } from "../types/Autor.js";


export function listaAutores(): Autor[] {
    return Autores.listarTodos();
}