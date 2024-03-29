import { Injectable } from "@nestjs/common";
import { FormaPagamento } from "../FormaPagamento";
import { CarrinhoDTO } from "../dto/carrinhoDTO";
import { CompraEntity } from "../entity/Compra";
import { CompraRepositorio } from "../repository/compra_repositorio";

@Injectable()
export class CadastraCompraService{
    
    constructor(
        private readonly compraRepositorio: CompraRepositorio
    ){}
    
    cadastraCompra(carrinho: CarrinhoDTO, formaPagamento: FormaPagamento, parcelas: number): CompraEntity {
        
        const novaCompra: CompraEntity = {
            idUsuario: carrinho.idUsuario,
            items: [],
            total: carrinho.total,
            formaPagamento: formaPagamento,
            parcelas: parcelas,
            valorParcela: formaPagamento==FormaPagamento.D ? carrinho.total : carrinho.total / parcelas,
            dataCompra: new Date()
        }
    
        carrinho.items.forEach(element => {
            novaCompra.items.push(element.item)
        });
    
        this.compraRepositorio.salvar(novaCompra);

        return novaCompra;
    }

}
