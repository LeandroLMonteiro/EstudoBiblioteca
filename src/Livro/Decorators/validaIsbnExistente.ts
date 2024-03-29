import { ValidationArguments, ValidationOptions, ValidatorConstraint, registerDecorator } from "class-validator";
import { Injectable } from "@nestjs/common";
import { LivroRepository } from "../repository/livro_repositorio";

@Injectable()
@ValidatorConstraint({async: false})
export class IsbnNaoExiste {
    constructor(
        private livroRepository: LivroRepository
    ) {}

    validate(value: any, validationArguments?: ValidationArguments): boolean {
        const isbnExiste = this.livroRepository.validaIsbnExistente(value);
        return !isbnExiste;
    }
}

export const IsbnNaoExistente = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: IsbnNaoExiste
        });
    }
}