import pino from 'pino';

export default class Logger {
	static info(message: string) {
		pino().child({}).info(message);
	}

	static error(message: string) {
		pino().child({}).error(message);
	}
}
