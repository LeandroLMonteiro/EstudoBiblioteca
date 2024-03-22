import { livroSchema } from "../entity/Livro.js"

const livros: typeof livroSchema[] = []

export const Livros = {
    salvar(novoLivro: typeof livroSchema) {
        
        livros.push(novoLivro);
        
    },

    listarTodos() {

        return livros;
        
    },

    validaIsbnExistente(isbn: number): boolean {
        return livros.some(livro => livro.isbn === isbn);
    }

}
