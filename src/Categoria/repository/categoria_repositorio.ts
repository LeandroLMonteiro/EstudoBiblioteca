import slugify from "slugify";
import { CategoriaEntity } from "../entity/Categoria";
import { Injectable } from "@nestjs/common";
import { CategoriaDTO } from "../dto/categoriaDTO";

@Injectable()
export class CategoriaRepository {

    private categorias: CategoriaEntity[] = [];

    salvar(novaCategoria: CategoriaDTO) {
            const slug = slugify(novaCategoria.categoria, {lower: true})

            if (!this.validaCategoriaExistente(novaCategoria.categoria))
                this.categorias.push({slug, ...novaCategoria});

            return {slug, ...novaCategoria}
        }
    
    listarTodos() {
    
            return this.categorias;
            
        }
    
    remover(categoria: string){
        const cat = this.categorias.filter(categorias => categorias.slug !== slugify(categoria, {lower: true}));
        this.categorias.map(cat => {cat})
        return this.categorias; 
    }

    validaCategoriaExistente(textoCategoria: string): boolean {
            return this.categorias.some((categorias) => categorias.slug === slugify(textoCategoria, {lower: true}));
        }
    
}