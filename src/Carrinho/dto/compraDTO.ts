import { FormaPagamento } from "../FormaPagamento";
import { validaParcela } from "../decorators/validaParcela";


export class CompraDTO {
    formaPagamento: FormaPagamento

    @validaParcela({message: 'Para pagamento a débito, o número de parcelas deve ser igual a 0.'})
    parcelas: number  
    
}
