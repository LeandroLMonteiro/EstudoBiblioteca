import { MigrationInterface, QueryRunner } from 'typeorm';

export class AjusteRefLivroAutor1715367556530 implements MigrationInterface {
  name = 'AjusteRefLivroAutor1715367556530';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "livros" ADD CONSTRAINT "FK_05d627223500271cda8a935541d" FOREIGN KEY ("autorId") REFERENCES "autores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "livros" ADD CONSTRAINT "FK_05d627223500271cda8a935541d" FOREIGN KEY ("autorId") REFERENCES "autores"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }
}
