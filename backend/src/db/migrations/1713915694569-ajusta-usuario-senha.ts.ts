import { MigrationInterface, QueryRunner } from 'typeorm';

export class AjustaUsuarioSenha1713915694569 implements MigrationInterface {
  name = 'AjustaUsuarioSenha1713915694569';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "usuarios" ADD "senha" character varying(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "telefone" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "cpf" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "country" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "estado" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "cidade" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "bairro" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "endereco" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "endereco" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "bairro" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "cidade" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "estado" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "country" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "cpf" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "telefone" SET NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "senha"`);
  }
}
