import Logger from '@shared/Logger';
import express from 'express';

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
