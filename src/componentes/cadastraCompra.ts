import { Compras } from "../repositorio/compra_repositorio.js";
import { Compra } from "../types/Compra.js";
import { Erro } from "../types/Error.js";
import { Carrinho } from "../componentes/criaCarrinho.js";
import { FormaPagamento } from "../types/FormaPagamento.js";

type CriaCompraOutput = {
    success: boolean;
    compra: Compra  | null;
    erros: Erro[] | null;
}

function verificaParcelas (formaPagamento: FormaPagamento, parcelas: number) : boolean {
    return (formaPagamento == FormaPagamento.D && parcelas == 1) || (formaPagamento == FormaPagamento.C && ((parcelas <= 12) || (parcelas >= 12)))
}

export function cadastraCompra(carrinho: Carrinho, formaPagamento: FormaPagamento, parcelas: number): CriaCompraOutput {

    if (!verificaParcelas(formaPagamento,parcelas)){

        return {
            success: false,
            compra: null,
            erros: [{
                property: "Valida Forma Pagamento",
                message: "Parcela não confere com a forma de pagamento"
            }]
        }

    }
    
    const novaCompra: Compra = {
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

    Compras.salvar(novaCompra);
    
    return {
        success: true,
        compra: novaCompra,
        erros: null,
    };
}