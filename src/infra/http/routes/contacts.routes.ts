import express, { Router } from 'express';
import { ContactsController } from '../controllers/contacts.controller';
export class ContactsRoutes {
	private _router: Router;
	private contactsController: ContactsController;

	constructor() {
		this.contactsController = new ContactsController();
		this._router = express.Router();
		this.loadRoutes();
	}

	private loadRoutes() {
		this._router.post('/create', (req, res) =>
			this.contactsController.createContact(req, res)
		);
		this._router.post('/edit', (req, res) =>
			this.contactsController.editContact(req, res)
		);
		this._router.get('/list', (req, res) =>
			this.contactsController.listAll(req, res)
		);
		this._router.delete('/delete/:id', (req, res) =>
			this.contactsController.deleteById(req, res)
		);
	}

	get router(): Router {
		return this._router;
	}
}
