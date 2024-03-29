import { Injectable } from "@nestjs/common";
import { LivroEntity } from "../entity/Livro"
import slugify from "slugify";

@Injectable()
export class LivroRepository{
    
    private livros: LivroEntity[] = []
    
    salvar(novoLivro: LivroEntity) {
        
        this.livros.push(novoLivro);
        
    }
    
    listarTodos() {
    
        return this.livros;
        
    }
    
    validaIsbnExistente(isbn: string): boolean {
        return this.livros.some(livro => livro.isbn === isbn);
    }

    verificaPrecoCategoria(preco: number, categoria: string) {    
        const categoriaLivreDistribuicao  = slugify(categoria) === 'Livre-Distribuicao';
        return (((preco != 0) || (categoriaLivreDistribuicao && preco == 0)))
    }

}

