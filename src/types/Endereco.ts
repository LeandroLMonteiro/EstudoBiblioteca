import { z } from "zod";
export const enderecoSchema = z.object({
        country: z.string().min(3),
        state: z.string().min(3),
        city: z.string().min(3),
        neighborhood: z.string().min(3),
        street: z.string().min(3),
        number: z.string().min(3),
        complement: z.string().min(3),
        zipCode: z.string().min(3),
    })
;

export type Endereco = {
    country: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
    zipCode: string;
};
