import { MigrationInterface, QueryRunner } from 'typeorm';

export class CriaTabelas1713542133165 implements MigrationInterface {
  name = 'CriaTabelas1713542133165';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "autores" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "email" character varying(150) NOT NULL, "biografia" character varying(500) NOT NULL, "dataCriacao" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8973029e8bb26f72a4738afc834" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "categorias" ("slug" character varying(100) NOT NULL, "categoria" character varying(70) NOT NULL, CONSTRAINT "PK_d7c32fbaefae4a73773e52c3165" PRIMARY KEY ("slug"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "livros" ("isbn" character varying(100) NOT NULL, "titulo" character varying(50) NOT NULL, "resumo" character varying(500) NOT NULL, "sumario" character varying(500) NOT NULL, "preco" numeric(12,2) NOT NULL, "num_pagina" integer NOT NULL, "data" date NOT NULL, "categoriaIdSlug" character varying(100), "autorIdId" uuid, CONSTRAINT "REL_647dc3b0988823d5c373b02466" UNIQUE ("categoriaIdSlug"), CONSTRAINT "PK_af619d4f3297f10337117d0738f" PRIMARY KEY ("isbn"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "usuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "email" character varying(150) NOT NULL, "telefone" character varying(15) NOT NULL, "cpf" character varying(11) NOT NULL, "country" character varying(3) NOT NULL, "estado" character varying(2) NOT NULL, "cidade" character varying(30) NOT NULL, "bairro" character varying(30) NOT NULL, "endereco" character varying(150) NOT NULL, "number" integer, "complemento" character varying(70), "cep" character varying(10) NOT NULL, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "livros" ADD CONSTRAINT "FK_647dc3b0988823d5c373b024661" FOREIGN KEY ("categoriaIdSlug") REFERENCES "categorias"("slug") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "livros" ADD CONSTRAINT "FK_05d627223500271cda8a935541d" FOREIGN KEY ("autorIdId") REFERENCES "autores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "livros" DROP CONSTRAINT "FK_05d627223500271cda8a935541d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "livros" DROP CONSTRAINT "FK_647dc3b0988823d5c373b024661"`,
    );
    await queryRunner.query(`DROP TABLE "usuarios"`);
    await queryRunner.query(`DROP TABLE "livros"`);
    await queryRunner.query(`DROP TABLE "categorias"`);
    await queryRunner.query(`DROP TABLE "autores"`);
  }
}
