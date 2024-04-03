import { UUID, randomUUID } from "crypto";
import { UsuarioRepository } from "../repository/usuario_repositorio";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ValidaUsuarioService {

    constructor (
        private usuarioRepositorio: UsuarioRepository
        ){}
        
    verificaUsuario(usuarioId: UUID):boolean {
        return this.usuarioRepositorio.usuarioExiste(usuarioId)
        
    }
        
}