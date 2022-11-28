import express, { Router } from 'express';
import { CompaniesRoutes } from './companies.routes';

export class Routes {
	private _router: Router;
	private companiesRoutes: CompaniesRoutes;

	constructor() {
		this.companiesRoutes = new CompaniesRoutes();
		this._router = express.Router();
		this.loadRoutes();
	}

	private loadRoutes() {
		this._router.use('/companies', this.companiesRoutes.router);
	}

	get router(): Router {
		return this._router;
	}
}
