import { Injectable } from "@nestjs/common";
import { AutorEntity } from "../entity/Autor"

@Injectable()
export class AutorRepositorio{
    
    private autores: AutorEntity[] = [];
    
    
    async salvar(novoAutor: AutorEntity) {
        
        this.autores.push(novoAutor);
        
    }
    
    async listarTodos() {
    
        return this.autores;
        
    }
    
    async validaEmailExistente(email: string): Promise<boolean> {
        return this.autores.some((autor) => autor.email === email);
    }
    
    async validaAutorPeloNome(nome: string): Promise<boolean> {
        return this.autores.some((autor) => autor.nome.trim().toUpperCase() === nome.trim().toUpperCase());
    }
}




