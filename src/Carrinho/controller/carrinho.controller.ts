import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarrinhoSevice } from '../service/carrinho';
import { CarrinhoDTO } from '../dto/carrinhoDTO';
import { CadastraCompraService } from '../service/cadastraCompra';
import { CompraDTO } from '../dto/compraDTO';
import { UUID } from 'crypto';

@Controller('carrinho')
export class CarrinhoController {
  constructor(
    private readonly CarrinhoService: CarrinhoSevice,
    private readonly cadastrarCompraService: CadastraCompraService,
  ) {}

  @Post('adicionaLivro/:id')
  AdicionaLivroCarrinho(@Param('id') id: UUID, @Body() data: CarrinhoDTO) {
    data.idUsuario = id;
    return this.CarrinhoService.adicionaLivro;
  }

  @Delete('removeLivro/:id')
  RemoveLivroCarrinho(@Param('id') id: string, @Body() data: CarrinhoDTO) {
    const item = this.CarrinhoService.encontraLivroPeloIsbn(id);
    return this.CarrinhoService.removeLivro(item);
  }

  @Post('criaCompra/')
  CriaCompra(@Body() compra: CompraDTO) {
    return this.cadastrarCompraService.cadastraCompra(
      this.CarrinhoService.carrinho,
      compra.formaPagamento,
      compra.parcelas,
    );
  }
}
