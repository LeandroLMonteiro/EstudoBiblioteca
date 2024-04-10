import { LivroRepository } from "../repository/livro_repositorio.js";
import { LivroEntity } from "../entity/livro.entity.js";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ListaLivroServices {

    constructor (
        private livroRepository: LivroRepository
    ) {}
    

    async listarLivros(): Promise<LivroEntity[]> {
            
        return await this.livroRepository.listarTodos();
        
    }
}
