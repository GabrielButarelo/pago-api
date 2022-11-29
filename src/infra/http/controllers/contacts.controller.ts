import { CreateContactUseCase } from '@modules/Contacts/useCases/createContact.useCase';
import { EditContactUseCase } from '@modules/Contacts/useCases/editContact.useCase';
import { ListAllContactsUseCase } from '@modules/Contacts/useCases/listAllContacts.useCase';
import { ICreateContact } from '@shared/interfaces/modules/repositories/methods/ICreateContact';
import { IEditContact } from '@shared/interfaces/modules/repositories/methods/IEditContact';
import HttpResponse from '@shared/utils/HttpResponse';
import { Request, Response } from 'express';

export class ContactsController {
	private createContactUseCase: CreateContactUseCase;
	private listAllContactsUseCase: ListAllContactsUseCase;
	private editContactUseCase: EditContactUseCase;

	constructor() {
		this.createContactUseCase = new CreateContactUseCase();
		this.listAllContactsUseCase = new ListAllContactsUseCase();
		this.editContactUseCase = new EditContactUseCase();
	}

	async createContact(req: Request, res: Response) {
		try {
			const data: ICreateContact = req.body;

			await this.createContactUseCase.execute(data);

			return HttpResponse.send(res, {
				status: 200,
				message: 'Contact created!',
			});
		} catch (error) {
			return HttpResponse.send(res, {
				status: 400,
				message: error.message,
			});
		}
	}

	async listAll(req: Request, res: Response) {
		try {
			const contacts = await this.listAllContactsUseCase.execute();

			return HttpResponse.send(res, {
				status: 200,
				data: contacts,
			});
		} catch (error) {
			return HttpResponse.send(res, {
				status: 400,
				message: error.message,
			});
		}
	}

	async deleteById(req: Request, res: Response) {
		try {
			return HttpResponse.send(res, {
				status: 200,
			});
		} catch (error) {
			return HttpResponse.send(res, {
				status: 400,
				message: error.message,
			});
		}
	}

	async editContact(req: Request, res: Response) {
		try {
			const data: IEditContact = req.body;

			await this.editContactUseCase.execute(data);

			return HttpResponse.send(res, {
				status: 200,
				message: 'The contact is updated!',
			});
		} catch (error) {
			return HttpResponse.send(res, {
				status: 400,
				message: error.message,
			});
		}
	}
}
