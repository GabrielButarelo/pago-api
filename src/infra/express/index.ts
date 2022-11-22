import express from 'express';
import Logger from '../../shared/logger/Logger';

export default class HttpServer {
	private app;
	private port: number;

	constructor() {
		this.app = express();
		this.port = Number(process.env.API_PORT) || 3000;
	}

	start() {
		this.app.listen(this.port, () => {
			Logger.info('Server is started!');
		});
	}
}
