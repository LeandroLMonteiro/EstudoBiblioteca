import { Injectable } from "@nestjs/common";
import { CategoriaRepository } from "../repository/categoria_repositorio";

@Injectable()
export class ValidadorCategoriaServices {
    constructor(
        private readonly categorias: CategoriaRepository

    ){}

    validaCategoriaExistente(textoCategoria: string): boolean {
            return this.categorias.validaCategoriaExistente(textoCategoria);
        }
    
}