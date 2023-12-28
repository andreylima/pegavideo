import { DataSource } from 'typeorm';
import { ConsultaInstagram } from './instagram/entities'; // Import your entities
import { ConsultaYoutube } from './youtube/entities';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin123",
    database: "pegavideo",
    entities: [ConsultaInstagram, ConsultaYoutube],
    migrations: ['../dist/migrations/*.js']
});