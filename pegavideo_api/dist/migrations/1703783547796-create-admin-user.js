"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdminUser1703783547796 = void 0;
class CreateAdminUser1703783547796 {
    constructor() {
        this.name = 'CreateAdminUser1703783547796';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "adminUser" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(50) NOT NULL, "password" character varying(128) NOT NULL, CONSTRAINT "UQ_58bd2b086488ba1ba90847a192e" UNIQUE ("username"), CONSTRAINT "PK_f155e50a944f2658dc1ccb477a2" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "adminUser"`);
    }
}
exports.CreateAdminUser1703783547796 = CreateAdminUser1703783547796;
//# sourceMappingURL=1703783547796-create-admin-user.js.map