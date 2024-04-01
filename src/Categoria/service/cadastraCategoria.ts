import { Injectable } from "@nestjs/common";
import { CategoriaRepository } from "../repository/categoria_repositorio";
import { CategoriaDTO } from "../dto/categoriaDTO";

@Injectable()
export class CategoriaService {

    constructor (
        private readonly categorias: CategoriaRepository
    ){}

    cadastraCategoria(data: CategoriaDTO) {
        
        return this.categorias.salvar(data);
          
    }

    listaCategoria(): CategoriaDTO[]{
        return this.categorias.listarTodos() as CategoriaDTO[]
    }

    removeCategoria(data: string) {    
        return this.categorias.remover(data);
    }

}