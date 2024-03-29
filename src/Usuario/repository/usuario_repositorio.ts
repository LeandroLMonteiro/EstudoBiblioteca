import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "../entity/usuario";

@Injectable()
export class UsuarioRepository{

    private usuario: UsuarioEntity[] = []

    salvar(novoUsuario: UsuarioEntity) {
        
        this.usuario.push(novoUsuario);
        
    }
    
    listarTodos() {
    
        return this.usuario;
        
    }
}


