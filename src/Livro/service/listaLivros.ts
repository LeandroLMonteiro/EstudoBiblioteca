import { LivroRepository } from "../repository/livro_repositorio.js";
import { LivroEntity } from "../entity/Livro.js";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ListaLivroServices {

    constructor (
        private livroRepository: LivroRepository
    ) {}
    

    listarLivros(): LivroEntity[] {
            
        return this.livroRepository.listarTodos();
        
    }
}
