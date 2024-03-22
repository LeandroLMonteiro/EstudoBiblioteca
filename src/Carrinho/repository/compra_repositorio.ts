import { Compra } from "../entity/Compra.js"
import { FormaPagamento } from "../FormaPagamento.js";

const compras: Compra[] = [];

export const Compras = {
    salvar(novaCompra: Compra) {
        
        compras.push(novaCompra);
        
    },

    listarCompras() {

        return compras;
        
    }

}
