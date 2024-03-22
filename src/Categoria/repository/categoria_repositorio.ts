import { categoriaSchema } from "../entity/Categoria.js";
import slugify from 'slugify';

const categorias: typeof categoriaSchema[] = [];

export const Categorias = { 
    salvar(novaCategoria: typeof categoriaSchema) {
        
        categorias.push(novaCategoria);
        
    },

    listarTodos() {

        return categorias;
        
    },

    validaCategoriaExistente(textoCategoria: string): boolean {
        return categorias.some(categoria => slugify(categoria.categoria, {lower: true}) === slugify(textoCategoria, {lower: true}));
    }

}
