import { z } from "zod";
import { Autores } from "../repositorio/autor_repositorio.js";
import { Categorias } from "../repositorio/categoria_repositorio.js";
import { Livros } from "../repositorio/livro_repositorio.js";
import slugify from "slugify"

export const livroSchema = z.object({
    titulo: z.string({
        required_error: "Título deve ser informado"}).trim().min(1,{message: "Título não pode ser vazio"}),
    resumo: z.string({
        required_error: "Resumo deve ser informado"}).trim()
        .min(1,{message: "Resumo não pode ser vazio"})
        .max(500,{message: "Resumo não deve ultrapassar 500 caracteres"}),
    sumario: z.string({
        required_error: "Sumário deve ser informado"}).trim()
        .min(100,{message: "Sumário deve ter no mínimo 100 caracteres"}),
    preco: z.number().default(0),
    num_pagina: z.number().int().gt(0,{message: "Número de página deve ser maior que 0"}).optional(),
    isbn: z.number({required_error: "ISBN deve ser informado"})
            .refine((isbn) => !Livros.validaIsbnExistente(isbn),{
                message: 'ISBN existente'
            }),
    data: z.date().refine((data) => {
        const hoje = new Date();
        return data > hoje}, {message: "Data deve estar no futuro"}),
    categoria: z.string().trim().refine((categoria)=>Categorias.validaCategoriaExistente(categoria),{
        message: 'Não existe categoria cadastrada'
    }),
    autor: z.string({
        required_error: "Nome deve ser informado"}).trim().min(1,{message: "Nome não pode ser vazio"})
        .refine((autor)=>Autores.validaAutorPeloNome(autor),{      
                 message: "Autor não cadastrado"
        })
    }).superRefine(({preco, categoria}, ctx)=>{      
        if (!((preco != 0) || (slugify(categoria, { lower: true}) == "livre-distribuicao" && preco == 0))) 
        {
            ctx.addIssue({
                code: "custom",
                path: ["Preço"],
                message: "Preço deve ser informado. Livro não pertence a categoria de livre distribuição"
            });
        }

    });
