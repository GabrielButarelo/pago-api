import { appDataSource } from '@infra/database';
import { ContactEntity } from '@infra/database/entities/ContactEntity';
import { IContactsRepository } from '@shared/interfaces/modules/repositories/IContactsRepository';
import { ICreateContact } from '@shared/interfaces/modules/repositories/methods/ICreateContact';
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
}
