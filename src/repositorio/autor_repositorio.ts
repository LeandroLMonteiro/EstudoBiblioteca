import { autorSchema } from "../types/Autor.js"

const autores: typeof autorSchema[] = [];

export const Autores = {
    salvar(novoAutor: typeof autorSchema) {
        
        autores.push(novoAutor);
        
    },

    listarTodos() {

        return autores;
        
    },

    validaEmailExistente(email: string): boolean {
        return autores.some(autor => autor.email === email);
    },

    validaAutorPeloNome(nome: string): boolean {
        return autores.some(autor => autor.nome === nome);
    }

}
