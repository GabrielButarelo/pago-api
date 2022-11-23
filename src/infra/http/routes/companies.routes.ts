import express, { Router } from 'express';
import CompaniesController from '../controllers/companies.controller';

export default class CompaniesRoutes {
	private _router: Router = express.Router();
	private companiesController: CompaniesController;

	constructor() {
		this.companiesController = new CompaniesController();

		// this._router.get('/list');
		// this._router.get('/view/:id');
		this._router.post('/create', this.companiesController.create);
		// this._router.patch('/list');
	}

	get router(): Router {
		return this._router;
	}
}
