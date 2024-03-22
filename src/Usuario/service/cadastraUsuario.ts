import { randomUUID } from "crypto";
import { Usuarios } from "../repository/usuario_repositorio.js"
import { Usuario,usuarioSchema } from "../entity/usuario.js";
import { Erro } from "../../types/Error.js";

type CriaUsuarioInput = Omit<Usuario, 'id' | 'nome'> & {
    primeiroNome: string,
    ultimoNome: string
};

type CriaUsuarioOutput = {
    errors: Erro[] | null,
    success: boolean;
    usuario: Usuario | null
};

export function cadastraUsurario(input: CriaUsuarioInput): CriaUsuarioOutput {
    const resultado = usuarioSchema.safeParse(input);

    if(!resultado.success) {
        return {
            success: false,
            usuario: null,
            errors: resultado.error.errors.map(error => ({
                property: error.path.toString(),
                message: error.message,
            }))
        }
    }

    const { primeiroNome, ultimoNome, ...rest } = resultado.data

    const novoUsuario: Usuario = {
        id: randomUUID(),
        nome: `${primeiroNome} ${ultimoNome}`,
        ...rest
    };

    Usuarios.salvar(novoUsuario);
 
    return {
            success: true,
            errors: null,
            usuario: novoUsuario
        };
};