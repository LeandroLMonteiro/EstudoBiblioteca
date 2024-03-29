import slugify from "slugify";
import { CategoriaEntity } from "../entity/Categoria";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoriaRepository {

    private categorias: CategoriaEntity[] = []

    salvar(novaCategoria: CategoriaEntity) {
            if (!this.validaCategoriaExistente(novaCategoria.categoria))
                this.categorias.push(novaCategoria);
            
        }
    
    listarTodos() {
    
            return this.categorias;
            
        }
    
    remover(categoria: string){
        const cat = this.categorias.filter(categorias => slugify(categorias.categoria, {lower: true}) !== slugify(categoria, {lower: true}));
        this.categorias.map(cat => {cat})
        return this.categorias; 
    }

    encontraCategoria (textoCategoria: string) {
        return this.categorias.find(categorias => slugify(categorias.categoria, {lower: true}) === slugify(textoCategoria, {lower: true}));
    }

    private validaCategoriaExistente(textoCategoria: string): boolean {
            return this.categorias.some(categorias => slugify(categorias.categoria, {lower: true}) === slugify(textoCategoria, {lower: true}));
        }
    
}