import { Livro } from "../types/Livro.js";
import { FormaPagamento } from "../types/FormaPagamento.js";

export type Compra = {
    idUsuario: string,
    items: Livro[],
    total: number,
    formaPagamento: FormaPagamento,
    parcelas: number,
    valorParcela: number,
    dataCompra: Date
}

