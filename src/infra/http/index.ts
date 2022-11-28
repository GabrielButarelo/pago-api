import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import Logger from '@shared/utils/Logger';
import { Routes } from './routes';

export class HttpServer {
	private app;
	private port: number;
	private routesApi: Routes;

	constructor() {
		this.app = express();

		this.routesApi = new Routes();

		this.middlewares();
	}

	start() {
		this.port = Number(process.env.API_PORT) || 3000;

		this.app.listen(this.port, () => {
			Logger.info('✅ Server is running!');
		});
	}

	private middlewares() {
		this.app.use(express.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));

		this.app.use(
			cors({
				origin: '*',
			})
		);

		this.app.use(morgan('tiny'));

		this.app.use('/api', this.routesApi.router);
	}
}
