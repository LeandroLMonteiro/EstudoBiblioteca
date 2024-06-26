import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CriarAutorService } from '../service/criarAutorService';
import { AtualizaAutorDTO, CriaAutorDTO } from '../dto/Autor';
import { ListarAutorService } from '../service/listaAutores';
import { AutenticacaoGuard } from '../../Autenticacao/autenticacao.guard';

@UseGuards(AutenticacaoGuard)
@Controller('autor')
export class AutorController {
  constructor(
    private readonly criarAutorService: CriarAutorService,
    private readonly listarAutorService: ListarAutorService,
  ) {}

  @Post('criar')
  async criaAutor(@Body() data: CriaAutorDTO) {
    return await this.criarAutorService.cadastraAutor(data);
  }

  @Get('listar')
  async listaAutor() {
    return await this.listarAutorService.listarAutor();
  }

  @Get('listar/:id')
  async listaAutorLivros(@Param('id') id: string) {
    return await this.listarAutorService.listarAutorLivros(id);
  }

  @Get('nome/:id')
  async obtemNomeAutor(@Param('id') id: string) {
    return await this.listarAutorService.obtemNomeAutor(id);
  }

  @Patch(':id')
  async atualizaAutor(
    @Param('id') id: string,
    @Body() dadosAutor: AtualizaAutorDTO,
  ) {
    return this.atualizaAutor(id, dadosAutor);
  }

  @Delete(':id')
  async deletaAutor(@Param('id') id: string) {
    return this.deletaAutor(id);
  }
}
