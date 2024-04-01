import { ValidationArguments, ValidationOptions, ValidatorConstraint, registerDecorator } from "class-validator";
import { Injectable } from "@nestjs/common";
import { LivroRepository } from "../repository/livro_repositorio";

@Injectable()
@ValidatorConstraint()
export class ValidaPrecoCategoria
{    constructor(
            private livroRepositorio: LivroRepository
    ) {}

    validate(value: any, validationArguments?: ValidationArguments): boolean {
        return this.livroRepositorio.verificaPrecoCategoria(value,validationArguments.object['categoria']);
    }
}

export const validaPreco = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: ValidaPrecoCategoria
        });
    }
}