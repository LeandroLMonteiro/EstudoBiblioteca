import slugify from "slugify";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CategoriaEntity } from "../entity/categoria.entity";
import { CategoriaDTO } from "../dto/categoriaDTO";


@Injectable()
export class CategoriaRepository {

    constructor (
        @InjectRepository(CategoriaEntity)
        private readonly categoriaRepository: Repository<CategoriaEntity>
    ) {}

    async salvar(novaCategoria: CategoriaDTO) {

        const slug = slugify(novaCategoria.categoria, {lower: true})
        if (!await this.validaCategoriaExistente(novaCategoria.categoria)) {
           await this.categoriaRepository.save({slug, ...novaCategoria} as CategoriaEntity);
           return {slug, ...novaCategoria};
        }
        else
          return new(Error);
        
    }
    
    async listarTodos() {
    
        return await this.categoriaRepository.find();
            
    }
    
    async remover(categoria: string){
        const slug = slugify(categoria, {lower: true})

        if (await this.categoriaRepository.findOne({where: {slug}}))
            await this.categoriaRepository.delete({slug});
        
        return await this.categoriaRepository.find();
    }

    async validaCategoriaExistente(textoCategoria: string): Promise<boolean> {
        const slug = slugify(textoCategoria, {lower: true});
        return !!await this.categoriaRepository.findOne({where: {slug}});
    }

    async retornaSlugCategoria(textoCategoria: string){
        const slug = slugify(textoCategoria, {lower: true});
        return (await this.categoriaRepository.findOne({where: {slug}})).slug;
    }
}