"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("./instagram/entities");
const entities_2 = require("./youtube/entities");
const AdminUser = require('nestjs-admin').AdminUserEntity;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin123",
    database: "pegavideo",
    entities: [entities_1.ConsultaInstagram, entities_2.ConsultaYoutube, AdminUser],
    migrations: ['../dist/migrations/*.js']
});
//# sourceMappingURL=data-source.js.map