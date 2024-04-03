import { ValidationArguments, ValidationOptions, ValidatorConstraint, registerDecorator } from "class-validator";
import { Injectable } from "@nestjs/common";
import { ValidadorCategoriaServices } from "src/Categoria/service/validadorCategoria.sevices";


@Injectable()
@ValidatorConstraint({async: false})
export class CategoriaExiste {
    constructor(
        private categoriaServices: ValidadorCategoriaServices
    ) {}

    validate(value: any, validationArguments?: ValidationArguments): boolean {
        return this.categoriaServices.validaCategoriaExistente(value);
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