import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import Routes from './routes';
import Logger from '@shared/utils/Logger';

export default class HttpServer {
	private app;
	private port: number;

	constructor() {
		this.app = express();

		this.app.use(express.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));

		this.app.use(
			cors({
				origin: '*',
			})
		);

		this.app.use(morgan('tiny'));

		this.routes();
	}

	start() {
		this.port = Number(process.env.API_PORT) || 3000;

		this.app.listen(this.port, () => {
			Logger.info('✅ Server is running!');
		});
	}

	private routes() {
		const routes = new Routes();

		this.app.use('/api', routes.router);
	}
}
