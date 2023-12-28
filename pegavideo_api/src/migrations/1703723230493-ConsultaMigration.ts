import { MigrationInterface, QueryRunner } from "typeorm";

export class ConsultaMigration1703723230493 implements MigrationInterface {
    name = 'ConsultaMigration1703723230493'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "consulta_instagram" ("id" SERIAL NOT NULL, "ip" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_65c8afd28428fffd97957f05306" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "consulta_youtube" ("id" SERIAL NOT NULL, "ip" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_cb41103ff555a9c2e7ba08eef2b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "consulta_youtube"`);
        await queryRunner.query(`DROP TABLE "consulta_instagram"`);
    }

}
