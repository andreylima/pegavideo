import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateAdminUser1703783547796 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
