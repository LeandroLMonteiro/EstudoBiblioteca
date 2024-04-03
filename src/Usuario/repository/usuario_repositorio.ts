import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "../entity/usuario";
import { UUID } from "crypto";

@Injectable()
export class UsuarioRepository{

    private usuario: UsuarioEntity[] = []

    salvar(novoUsuario: UsuarioEntity) {
        
        this.usuario.push(novoUsuario);
        
    }
    
    listarTodos() {
    
        return this.usuario;
        
    }

    usuarioExiste(id: UUID):boolean {
        return this.usuario.some((usuario) => {usuario.id === id})
    }
}


