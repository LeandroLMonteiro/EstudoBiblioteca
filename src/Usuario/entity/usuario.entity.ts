import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'usuarios'})
export class UsuarioEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name : 'nome', length: 100, nullable: false})
    nome: string;

    @Column({name: 'email', length: 150, nullable: false})
    email: string;

    @Column({name: 'telefone', length: 15, nullable: false})
    telefone: string;

    @Column({name: 'cpf', length: 11, nullable: false})
    cpf: string;

    @Column({name: 'country', length: 3, nullable: false})
    country: string;

    @Column({name: 'estado', length: 2, nullable: false})
    estado: string;

    @Column({name: 'cidade', length: 30, nullable: false})
    cidade: string;
    @Column({name: 'bairro', length: 30, nullable: false})
    bairro: string;

    @Column({name: 'endereco', length: 150, nullable: false})
    endereco: string;

    @Column({name: 'number', type: 'int', nullable: true})
    number: number;

    @Column({name: 'complemento', length: 70, nullable: true})
    complemento: string;

    @Column({name: 'cep', length: 10, nullable: false})
    cep: string;
};

