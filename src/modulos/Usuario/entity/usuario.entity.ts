import { Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'email', length: 150, nullable: false })
  email: string;

  @Exclude()
  @Column({ name: 'senha', length: 255, nullable: false })
  senha: string;

  @Column({ name: 'telefone', length: 15, nullable: true })
  @IsOptional()
  telefone: string;

  @Column({ name: 'cpf', length: 11, nullable: true })
  @IsOptional()
  cpf: string;

  @Column({ name: 'country', length: 3, nullable: true })
  @IsOptional()
  country: string;

  @Column({ name: 'estado', length: 2, nullable: true })
  @IsOptional()
  estado: string;

  @Column({ name: 'cidade', length: 30, nullable: true })
  @IsOptional()
  cidade: string;

  @Column({ name: 'bairro', length: 30, nullable: true })
  @IsOptional()
  bairro: string;

  @Column({ name: 'endereco', length: 150, nullable: true })
  @IsOptional()
  endereco: string;

  @Column({ name: 'number', type: 'int', nullable: true })
  @IsOptional()
  number: number;

  @Column({ name: 'complemento', length: 70, nullable: true })
  @IsOptional()
  complemento: string;

  @Column({ name: 'cep', length: 10, nullable: true })
  @IsOptional()
  cep: string;
}
