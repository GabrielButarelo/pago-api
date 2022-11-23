import 'dotenv/config';
import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
	type: 'postgres',
	name: 'default',
	database: process.env.DB_NAME,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT) || 5432,
	entities: ['src/infra/database/entities/*.ts'],
	migrations: ['src/infra/database/migrations/*.ts'],
	synchronize: false,
});
