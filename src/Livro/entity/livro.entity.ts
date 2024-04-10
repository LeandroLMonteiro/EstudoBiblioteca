import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

import { AutorEntity } from "src/Autor/entity/autor.entity";
import { CategoriaEntity } from "src/Categoria/entity/categoria.entity";


@Entity({name: 'livros'})
export class LivroEntity {

    @PrimaryColumn({name:'isbn', nullable: false, length: 100})
    isbn: string;

    @Column({name:'titulo', length: 50, nullable: false})
    titulo: string;

    @Column({name:'resumo', length: 500, nullable: false})
    resumo: string;

    @Column({name:'sumario', length: 500, nullable: false})
    sumario: string;

    @Column({name:'preco', nullable: false, type: 'numeric', precision: 12, scale: 2})
    preco: number;

    @Column({name:'num_pagina', nullable: false, type: 'int'})
    num_pagina: number;

    @Column({name:'data', nullable: false, type: 'date'})
    data: Date;

    @OneToOne(() => CategoriaEntity, (categoria) => categoria.slug)
    @JoinColumn()
    categoriaId: string;

    @ManyToOne(() => AutorEntity, (autor) => autor.id)
    autorId: string
    };