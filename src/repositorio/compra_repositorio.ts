import { Compra } from "../types/Compra.js"
import { FormaPagamento } from "../types/FormaPagamento.js";

const compras: Compra[] = [];

export const Compras = {
    salvar(novaCompra: Compra) {
        
        compras.push(novaCompra);
        
    },

    listarCompras() {

        return compras;
        
    }

}
