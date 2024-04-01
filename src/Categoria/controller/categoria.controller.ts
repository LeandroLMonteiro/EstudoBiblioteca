import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CategoriaService } from "../service/cadastraCategoria";
import { CategoriaDTO } from "../dto/categoriaDTO";

@Controller('categoria')
export class CategoriaController {

    constructor(
        private readonly CategoriaService: CategoriaService
    ){}
    
    @Post('criaCategoria/')
    adicionaCategoria(@Body() data: CategoriaDTO) {
        return this.CategoriaService.cadastraCategoria(data);
    }

    @Get()
    listaDeCategorias() {
        return this.CategoriaService.listaCategoria();
    }
    
    @Delete('removeCategoria/:categoria')
    removeCategoria(@Param('categoria') id: string) {
        return this.CategoriaService.removeCategoria(id);
    }
    
}