import { appDataSource } from '@infra/database';
import { ContactEntity } from '@infra/database/entities/ContactEntity';
import { IContactEntity } from '@shared/interfaces/entities/IContactEntity';
import { IContactsRepository } from '@shared/interfaces/modules/repositories/IContactsRepository';
import { ICreateContact } from '@shared/interfaces/modules/repositories/methods/ICreateContact';
import { IEditContact } from '@shared/interfaces/modules/repositories/methods/IEditContact';
import { IGetContactsByColumn } from '@shared/interfaces/modules/repositories/methods/IGetContactsByColumn';
import { Repository } from 'typeorm';

export class ContactsRepository implements IContactsRepository {
	private repository: Repository<ContactEntity>;

	constructor() {
		this.repository = appDataSource.getRepository(ContactEntity);
	}

	async create(data: ICreateContact): Promise<void> {
		try {
			const newContact = this.repository.create({
				name: data.name,
				company_id: data.companyId,
				key: data.key,
				type: data.type,
				created_at: new Date(),
			});

			await this.repository.save(newContact);

			return;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	listAllContacts(): Promise<IContactEntity[]> {
		try {
			const contacts = this.repository.find();

			return contacts;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async getContactsByColumn(
		data: IGetContactsByColumn
	): Promise<IContactEntity[] | IContactEntity> {
		try {
			if (data.id) {
				const contact = this.repository.findOne({
					where: {
						...data,
					},
				});

				return contact;
			}

			const contacts = this.repository.find({
				where: {
					...data,
				},
			});

			return contacts;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	editContact(data: IEditContact): Promise<void> {
		try {
			this.repository.save({
				...data,
			});

			return;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	deleteContactById(id: number): Promise<void> {
		try {
			this.repository.query(
				`
				DELETE FROM contacts
				WHERE id = ${id}
			`
			);

			return;
		} catch (error) {
			throw new Error(error.message);
		}
	}
}
