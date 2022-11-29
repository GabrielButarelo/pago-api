import express, { Router } from 'express';
import { CompaniesRoutes } from './companies.routes';
import { ContactsRoutes } from './contacts.routes';

export class Routes {
	private _router: Router;
	private companiesRoutes: CompaniesRoutes;
	private contactsRoutes: ContactsRoutes;

	constructor() {
		this.companiesRoutes = new CompaniesRoutes();
		this.contactsRoutes = new ContactsRoutes();

		this._router = express.Router();

		this.loadRoutes();
	}

	private loadRoutes() {
		this._router.use('/companies', this.companiesRoutes.router);
		this._router.use('/contacts', this.contactsRoutes.router);
	}

	get router(): Router {
		return this._router;
	}
}
