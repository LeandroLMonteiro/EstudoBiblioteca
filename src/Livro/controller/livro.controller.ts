import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import { CadastraLivroServices } from "../service/cadastraLivro";
import { ListaLivroServices } from "../service/listaLivros";
import { LivroDTO } from "../dto/livroDTO";

@Controller('livro')
export class LivroController {

    constructor(
        private readonly cadastraLivros: CadastraLivroServices,
        private readonly livros: ListaLivroServices
    ){}
    

    
    @Post('criaLivro/')
    adicionaLivro(@Body() data: LivroDTO) {
        return this.cadastraLivros.cadastraLivro(data);
    }

    
    @Delete('listaLivros')
    listarLivros() {
        return this.livros.listarLivros();
    }
    
}