import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoriaDTO } from '../dto/categoriaDTO';
import { CategoriaService } from '../service/cadastraCategoria';
import { AutenticacaoGuard } from '../../Autenticacao/autenticacao.guard';

@UseGuards(AutenticacaoGuard)
@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post('criaCategoria/')
  adicionaCategoria(@Body() data: CategoriaDTO) {
    return this.categoriaService.cadastraCategoria(data);
  }

  @Get()
  listaDeCategorias() {
    return this.categoriaService.listaCategoria();
  }

  @Delete('removeCategoria/:categoria')
  removeCategoria(@Param('categoria') id: string) {
    return this.categoriaService.removeCategoria(id);
  }
}
