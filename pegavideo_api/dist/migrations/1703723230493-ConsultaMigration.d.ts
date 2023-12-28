import { MigrationInterface, QueryRunner } from "typeorm";
export declare class ConsultaMigration1703723230493 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
