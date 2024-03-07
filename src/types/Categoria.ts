import { z } from "zod";
import { Categorias } from "../repositorio/categoria_repositorio.js"

export const categoriaSchema = z.object({
    categoria: z.string({
        required_error: "Categoria deve ser informada"}).trim().min(1,{message: "Categoria não pode ser vazio"})
        .refine((categoria) => !Categorias.validaCategoriaExistente(categoria), {
            message: 'Já existe categoria cadastrada',
        })
    });

