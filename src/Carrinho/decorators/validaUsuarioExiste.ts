import { ValidationArguments, ValidationOptions, ValidatorConstraint, registerDecorator } from "class-validator";
import { Injectable } from "@nestjs/common";
import { ValidaUsuarioService } from "src/Usuario/service/validaUsuario.service";

@Injectable()
@ValidatorConstraint()
export class ValidaUsuario
{    constructor(
            private validaUsuarioService: ValidaUsuarioService
    ) {}

    validate(value: any, validationArguments?: ValidationArguments): boolean {
        return this.validaUsuarioService.verificaUsuario(value);
    }
}

export const validaUsuario = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: ValidaUsuario
        });
    }
}


