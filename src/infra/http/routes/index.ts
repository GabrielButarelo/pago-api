import express, { Router } from 'express';
import CompaniesRoutes from './companies.routes';

export default class Routes {
	private _router: Router = express.Router();
	private companiesRoutes: CompaniesRoutes;

	constructor() {
		this.companiesRoutes = new CompaniesRoutes();

		this._router.use('/companies', this.companiesRoutes.router);
		// this._router.use('/contacts');
	}

	get router(): Router {
		return this._router;
	}
}
