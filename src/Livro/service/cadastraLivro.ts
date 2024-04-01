import { LivroRepository } from "../repository/livro_repositorio.js";
import { LivroEntity } from "../entity/Livro.js";
import { LivroDTO } from "../dto/livroDTO.js";
import { Injectable } from "@nestjs/common";
import { AutorRepositorio } from "src/Autor/repository/autor_repositorio.js";

@Injectable()
export class CadastraLivroServices {

    constructor (
        private livroRepository: LivroRepository,
    ) {}
    

    cadastraLivro(data: LivroDTO): LivroEntity {
        const novoLivro: LivroEntity = data
    
        this.livroRepository.salvar(novoLivro);

        return novoLivro
        
    }
}

