import { Usuario } from "../types/usuario.js";


const usuarios: Usuario[] = [];

export const Usuarios = {
    salvar(novoUsuario: Usuario) {
        
        usuarios.push(novoUsuario);
        
    },

    listarTodos() {

        return usuarios;
        
    }

}
