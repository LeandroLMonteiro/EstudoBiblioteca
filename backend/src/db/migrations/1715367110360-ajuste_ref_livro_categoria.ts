import { MigrationInterface, QueryRunner } from 'typeorm';

export class AjusteRefLivroCategoria1715367110360
  implements MigrationInterface
{
  name = 'AjusteRefLivroCategoria1715367110360';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "livros" DROP CONSTRAINT "REL_647dc3b0988823d5c373b02466"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "livros" ADD CONSTRAINT "REL_647dc3b0988823d5c373b02466" UNIQUE ("categoriaIdSlug")`,
    );
  }
}
