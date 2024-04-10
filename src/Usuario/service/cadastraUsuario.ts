import { randomUUID } from "crypto";
import { UsuarioDTO } from "../dto/UsuarioDTO";
import { UsuarioEntity } from "../entity/usuario.entity";
import { UsuarioRepository } from "../repository/usuario_repositorio";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CadastraUsuarioService {

    constructor (
        private usuarioRepositorio: UsuarioRepository
        ){}
        
        
    async cadastraUsurario(input: UsuarioDTO): Promise<UsuarioEntity> {
       
            const { primeiroNome, ultimoNome, ...rest } = input
        
            const novoUsuario: UsuarioEntity = {
                id: randomUUID(),
                nome: `${primeiroNome} ${ultimoNome}`,
                ...rest
            };
        
            await this.usuarioRepositorio.salvar(novoUsuario);
         
            return novoUsuario;
        };
        
}