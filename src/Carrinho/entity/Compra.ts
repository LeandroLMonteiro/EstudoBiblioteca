import { LivroDTO } from "src/Livro/dto/livroDTO";
import { FormaPagamento } from "../FormaPagamento";

export type CompraEntity = {
    idUsuario: string,
    items: LivroDTO[],
    total: number,
    formaPagamento: FormaPagamento,
    parcelas: number,
    valorParcela: number,
    dataCompra: Date
}

