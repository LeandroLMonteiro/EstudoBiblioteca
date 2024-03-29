import { randomUUID } from "crypto";
import { UsuarioDTO } from "../dto/UsuarioDTO";
import { UsuarioEntity } from "../entity/usuario";
import { UsuarioRepository } from "../repository/usuario_repositorio";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CadastraUsuarioService {

    constructor (
        private usuarioRepositorio: UsuarioRepository
        ){}
        
        
    cadastraUsurario(input: UsuarioDTO): UsuarioEntity {
       
            const { primeiroNome, ultimoNome, ...rest } = input
        
            const novoUsuario: UsuarioEntity = {
                id: randomUUID(),
                nome: `${primeiroNome} ${ultimoNome}`,
                ...rest
            };
        
            this.usuarioRepositorio.salvar(novoUsuario);
         
            return novoUsuario;
        };
        
}