import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CadastraLivroServices } from '../service/cadastraLivro';
import { ListaLivroServices } from '../service/listaLivros';
import { CriaLivroDTO } from '../dto/livroDTO';
import { AutenticacaoGuard } from '../../Autenticacao/autenticacao.guard';

@UseGuards(AutenticacaoGuard)
@Controller('livro')
export class LivroController {
  constructor(
    private readonly cadastraLivros: CadastraLivroServices,
    private readonly livros: ListaLivroServices,
  ) {}

  @Post('criaLivro/')
  adicionaLivro(@Body() data: CriaLivroDTO) {
    return this.cadastraLivros.cadastraLivro(data);
  }

  @Get('listaLivros')
  listarLivros() {
    return this.livros.listarLivros();
  }
}
