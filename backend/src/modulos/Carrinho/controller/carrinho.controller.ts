import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarrinhoSevice } from '../service/carrinho';
import { CadastraCompraService } from '../service/cadastraCompra';
import { CompraDTO } from '../dto/compraDTO';
import { UUID } from 'crypto';
import { ItemDTO } from '../dto/carrinhoDTO';

@Controller('carrinho')
export class CarrinhoController {
  constructor(
    private readonly CarrinhoService: CarrinhoSevice,
    private readonly cadastrarCompraService: CadastraCompraService,
  ) {}

  @Get()
  ListaCarrinho() {
    return this.CarrinhoService.listCarrinho();
  }

  @Post('adicionaLivro')
  AdicionaLivroCarrinho(/* @Param('id') id: UUID, */ @Body() data: ItemDTO) {
    return this.CarrinhoService.adicionaLivro(data);
  }

  @Delete('removeLivro/:id')
  RemoveLivroCarrinho(@Param('id') id: string) {
    return this.CarrinhoService.removeLivro(id);
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
