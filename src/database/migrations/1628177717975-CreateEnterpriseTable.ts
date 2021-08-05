import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEnterpriseTable1628177717975 implements MigrationInterface {
  name = 'CreateEnterpriseTable1628177717975';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "enterprise" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying(50) NOT NULL, "city" character varying, "is_sms" boolean NOT NULL DEFAULT false, "is_email" boolean NOT NULL DEFAULT false, "logo_url" character varying, "is_active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_09687cd306dc5d486c0e227c471" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "enterprise"`);
  }
}
