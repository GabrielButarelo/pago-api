import { ContactsRepository } from '../repositories/contacts.repository';

export class ListAllContactsUseCase {
	private contactsRepository: ContactsRepository;

	constructor() {
		this.contactsRepository = new ContactsRepository();
	}

	async execute() {
		try {
			const companies = await this.contactsRepository.listAllContacts();

			if (!companies.length) throw new Error(`No contacts found`);

			return companies;
		} catch (error) {
			throw new Error(error.message);
		}
	}
}
