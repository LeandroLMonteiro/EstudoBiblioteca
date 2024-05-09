import { LivroEntity } from '../../Livro/entity/livro.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'autores' })
export class AutorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'email', length: 150, nullable: false })
  email: string;

  @Column({ name: 'biografia', length: 500, nullable: false })
  biografia: string;

  @CreateDateColumn({ name: 'dataCriacao' })
  dataCriacao: Date;

  @OneToMany(() => LivroEntity, (livro) => livro.isbn, {
    cascade: true,
    eager: true,
  })
  livros: LivroEntity[];
}
