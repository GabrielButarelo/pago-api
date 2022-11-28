import express, { Router } from 'express';
import { CompaniesController } from '../controllers/companies.controller';
export class CompaniesRoutes {
	private _router: Router;
	private companiesController: CompaniesController;

	constructor() {
		this.companiesController = new CompaniesController();
		this._router = express.Router();
		this.loadRoutes();
	}

	private loadRoutes() {
		this._router.post('/create', (req, res) =>
			this.companiesController.create(req, res)
		);
		this._router.get('/list', (req, res) =>
			this.companiesController.listAll(req, res)
		);
	}

	get router(): Router {
		return this._router;
	}
}
