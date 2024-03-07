import { Categorias } from "../repositorio/categoria_repositorio.js";
import { categoriaSchema } from "../types/Categoria.js";
import { Erro } from "../types/Error.js";
import slugify from 'slugify';

type CreateCategoriaInput = {
    categoria: string;
};

type CreateCategoriaOutput = {
    success: boolean;
    categoria: typeof categoriaSchema | null;
    erros: Erro | null;
}

export function cadastraCategoria(data: CreateCategoriaInput): CreateCategoriaOutput {
    const result = categoriaSchema.safeParse(data);

    if(!result.success) {
        return {
            success: false,
            categoria: null,
            erros: result.error.errors.map(error => ({
                property: error.path.toString(),
                message: error.message,
            }))
        }
    }   
    
  const slug = slugify(result.data.categoria.toString(), {lower: true});
  
    const novaCategoria = {
        ...result.data,
        slug
    } ;

    Categorias.salvar(novaCategoria);
    
    return {
        success: true,
        categoria: novaCategoria,
        erros: null,
    };

}