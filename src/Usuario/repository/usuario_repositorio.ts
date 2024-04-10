import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "../entity/usuario.entity";
import { UUID } from "crypto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()

export class UsuarioRepository{

    constructor (
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>

    ) {}

    async salvar(novoUsuario: UsuarioEntity) {
        
        await this.usuarioRepository.save(novoUsuario);
        
    }
    
    async listarTodos() {
    
        return await this.usuarioRepository.find();
        
    }

    async usuarioExiste(id: UUID):Promise<boolean> {
        return !!await this.usuarioRepository.findOne({where:{id}})
    }
}


