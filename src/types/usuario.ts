import { z } from "zod";
import { Endereco, enderecoSchema } from "./Endereco.js";

export const usuarioSchema = z.object({
    primeiroNome: z.string().trim().min(3),
    ultimoNome: z.string().trim().min(3),
    email: z.string().trim().email(),
    telefone: z.string().trim().min(11).max(15).regex(/(\(?\d{2}\)?\s?\d{5}-?\d{4})/gm),
    cpf: z.string().trim().min(11).max(14).regex(/(\d{3}\.?){3}(-?\d{2})$/gm),
    endereco: enderecoSchema
});

export type Usuario = {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    endereco: Endereco;
}