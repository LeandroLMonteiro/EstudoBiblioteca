/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class AjustesAutorLivro1713580290947 implements MigrationInterface {
  name = 'AjustesAutorLivro1713580290947';

  public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "FK_05d627223500271cda8a935541d"`);
      await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "FK_05d627223500271cda8a935541d" FOREIGN KEY ("autorIdId") REFERENCES "autores"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "FK_05d627223500271cda8a935541d"`);
        await queryRunner.query(`ALTER TABLE "livros" ADD CONSTRAINT "FK_05d627223500271cda8a935541d" FOREIGN KEY ("autorIdId") REFERENCES "autores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
