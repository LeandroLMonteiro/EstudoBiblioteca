import { Autor } from "../types/Autor"

const autores: Autor[] = []

const Autores = {
    salvar(novoAutor: Autor) {
        
        autores.push(novoAutor);
        
    },

    listarTodos() {

        return autores;
        
    },

    validaEmailExistente(email: string): boolean {
        return autores.some(autor => autor.email === email);
    }
}

export default Autores;