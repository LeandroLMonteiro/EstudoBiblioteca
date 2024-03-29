import { ValidationArguments, ValidationOptions, ValidatorConstraint, registerDecorator } from "class-validator";
import { Injectable } from "@nestjs/common";
import { CategoriaRepository } from "src/Categoria/repository/categoria_repositorio";


@Injectable()
@ValidatorConstraint({async: false})
export class CategoriaExiste {
    constructor(
        private categoriaRepository: CategoriaRepository
    ) {}

    validate(value: any, validationArguments?: ValidationArguments): boolean {
        const CategoriaExiste = this.categoriaRepository.encontraCategoria(value);
        return CategoriaExiste != null;
    }
}

export const CategoriaExistente = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: CategoriaExiste
        });
    }
}