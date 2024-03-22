import { Body, Controller, Get, Post } from "@nestjs/common";
import { CriarAutorService } from "../service/criarAutorService";
import { CriaAutorDTO } from "../dto/Autor";
import { ListarAutorService } from "../service/listaAutores";

@Controller('autor')
export class AutorController {

    constructor(
        private readonly criarAutorService: CriarAutorService,
        private readonly listarAutorService: ListarAutorService,
    ){}
    
    @Post('criar')
    async criaAutor(@Body() data: CriaAutorDTO) {
        return await this.criarAutorService.cadastraAutor(data);
    }

    @Get('listar')
    async listaAutor(){
        return await this.listarAutorService.listarAutor();
    }

}