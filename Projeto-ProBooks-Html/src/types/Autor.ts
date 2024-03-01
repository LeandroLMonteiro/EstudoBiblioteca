import { z } from "zod";

export const autorSchema = z.object({
    nome: z.string({
        required_error: "Nome deve ser informado"}).trim().min(1,{message: "Nome não pode ser vazio"}),
    email: z.string({
        required_error: "Email deve ser informado"}).trim().email({message: "Email inválido"}),
    biografia: z.string({
        required_error: "Biografia deve ser informada"}).trim()
        .min(100,{message: "Biografia deve ter no mínimo 100 caracteres"})
        .max(500,{message: "Biografia não deve ultrapassar 500 caracteres"}),
    data: z.date().optional()
    });


export type Autor = z.infer<typeof autorSchema>;
