import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name:'categorias'})
export class CategoriaEntity {

    @PrimaryColumn({name:'slug', nullable: false, length: 100})
    slug: string;

    @Column({name:'categoria', nullable: false, length: 70})
    categoria: string
};

