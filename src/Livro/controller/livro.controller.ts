import { Body, Controller, Get, Post } from '@nestjs/common';
import { CadastraLivroServices } from '../service/cadastraLivro';
import { ListaLivroServices } from '../service/listaLivros';
import { LivroDTO } from '../dto/livroDTO';

@Controller('livro')
export class LivroController {
  constructor(
    private readonly cadastraLivros: CadastraLivroServices,
    private readonly livros: ListaLivroServices,
  ) {}

  @Post('criaLivro/')
  adicionaLivro(@Body() data: LivroDTO) {
    return this.cadastraLivros.cadastraLivro(data);
  }

  @Get('listaLivros')
  listarLivros() {
    return this.livros.listarLivros();
  }
}
