"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaMigration1703723230493 = void 0;
class ConsultaMigration1703723230493 {
    constructor() {
        this.name = 'ConsultaMigration1703723230493';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "consulta_instagram" ("id" SERIAL NOT NULL, "ip" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_65c8afd28428fffd97957f05306" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "consulta_youtube" ("id" SERIAL NOT NULL, "ip" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_cb41103ff555a9c2e7ba08eef2b" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "consulta_youtube"`);
        await queryRunner.query(`DROP TABLE "consulta_instagram"`);
    }
}
exports.ConsultaMigration1703723230493 = ConsultaMigration1703723230493;
//# sourceMappingURL=1703723230493-ConsultaMigration.js.map