import { Injectable } from "@nestjs/common";
import { AutorEntity } from "../entity/Autor.js";
import { randomUUID } from "crypto";
import { AutorRepositorio } from "../repository/autor_repositorio.js";
import { CriaAutorDTO } from "../dto/Autor.js";

@Injectable()
export class CriarAutorService {

    constructor(
        private readonly autorRepositorio: AutorRepositorio
    ){}

    async cadastraAutor(data: CriaAutorDTO): Promise<AutorEntity> {

        const novoAutor: AutorEntity = {
            ...data,
            dataCriacao: new Date(),
            id: randomUUID()
        };
    
        await this.autorRepositorio.salvar(novoAutor);
        
        return novoAutor;
    }

}





