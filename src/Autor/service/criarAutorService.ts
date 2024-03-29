import { Injectable } from "@nestjs/common";
import { AutorEntity } from "../entity/Autor";
import { randomUUID } from "crypto";
import { AutorRepositorio } from "../repository/autor_repositorio";
import { CriaAutorDTO } from "../dto/Autor";

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





