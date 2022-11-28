import 'reflect-metadata';
import 'dotenv/config';
import { appDataSource } from '@infra/database';
import { HttpServer } from '@infra/http';

async function start() {
	await appDataSource.initialize();
	const server = new HttpServer();
	server.start();
}

start();
