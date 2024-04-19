import { Module } from '@nestjs/common';
import { CarrinhoController } from './controller/carrinho.controller';
import { CadastraCompraService } from './service/cadastraCompra';
import { CarrinhoSevice } from './service/carrinho';
import { CompraRepositorio } from './repository/compra_repositorio';
import { ValidaParcela } from './decorators/validaParcela';
import { LivroModule } from 'src/Livro/livro.module';
import { CarrinhoDTO } from './dto/carrinhoDTO';
import { CompraDTO } from './dto/compraDTO';
import { ValidaUsuario } from './decorators/validaUsuarioExiste';
import { UsuarioModule } from 'src/Usuario/usuario.module';

@Module({
  imports: [LivroModule, UsuarioModule],
  controllers: [CarrinhoController],
  providers: [
    ValidaParcela,
    CadastraCompraService,
    CarrinhoSevice,
    CompraRepositorio,
    CarrinhoDTO,
    CompraDTO,
    ValidaUsuario,
  ],
})
export class CarrinhoModule {}
