import { Livro } from "../../Livro/entity/Livro.js";
import { FormaPagamento } from "../FormaPagamento.js";

export type Compra = {
    idUsuario: string,
    items: Livro[],
    total: number,
    formaPagamento: FormaPagamento,
    parcelas: number,
    valorParcela: number,
    dataCompra: Date
}

