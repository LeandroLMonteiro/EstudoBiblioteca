import { Module } from '@nestjs/common';
import { CarrinhoController } from './controller/carrinho.controller';
import { CadastraCompraService } from './service/cadastraCompra';
import { CarrinhoSevice } from './service/carrinho';
import { CompraRepositorio } from './repository/compra_repositorio';
import { ValidaParcela } from './decorators/validaParcela';
import { LivroModule } from 'src/Livro/livro.module';
import { CarrinhoDTO } from './dto/carrinhoDTO';
import { CompraDTO } from './dto/compraDTO';


@Module({
  imports: [LivroModule],
  controllers: [CarrinhoController],
  providers: [
    ValidaParcela,
    CadastraCompraService,
    CarrinhoSevice,
    CompraRepositorio,
    CarrinhoDTO,
    CompraDTO
  ],
})
export class CarrinhoModule {}
