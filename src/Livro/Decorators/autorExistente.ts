import { ValidationArguments, ValidationOptions, ValidatorConstraint, registerDecorator } from "class-validator";
import { Injectable } from "@nestjs/common";
import { AutorRepositorio } from "src/Autor/repository/autor_repositorio";

@Injectable()
@ValidatorConstraint({async: true})
export class AutorExiste {
    constructor(
        private autorRepository: AutorRepositorio
    ) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const resultado =  await this.autorRepository.validaAutorPeloNome(value);
        console.log(await this.autorRepository.listarTodos());
        return resultado;
        
    }
}

export const AutorExistente = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: AutorExiste
        });
    }
}