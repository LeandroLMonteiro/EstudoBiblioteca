import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { LivroEntity } from "../entity/livro.entity"


@Injectable()
export class LivroRepository{

    constructor(
        @InjectRepository(LivroEntity)
        private readonly livroRepository: Repository<LivroEntity>
    ){}
    
    async salvar(novoLivro: LivroEntity) {
        
        
        return await this.livroRepository.save(novoLivro);
        
    }
    
    async listarTodos() {
    
        return await this.livroRepository.find();
        
    }
    
    async validaIsbnExistente(isbn: string): Promise<boolean> {
        return !!await this.livroRepository.findOne({where:{isbn}});
    } 

}

