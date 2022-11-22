import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
	type: 'mssql',
	name: 'default',
	database: process.env.DB_NAME,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	entities: ['src/infra/database/entities/*.ts'],
	migrations: ['src/infra/database/migrations/*.ts'],
	synchronize: false,
	options: {
		enableArithAbort: true,
		encrypt: false,
	},
	requestTimeout: 10000,
	connectionTimeout: 10000,
});
