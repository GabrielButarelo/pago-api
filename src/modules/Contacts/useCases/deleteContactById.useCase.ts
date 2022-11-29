import { ContactsRepository } from '../repositories/contacts.repository';

export class DeleteContactByIdUseCase {
	private contactsRepository: ContactsRepository;

	constructor() {
		this.contactsRepository = new ContactsRepository();
	}

	async execute(id: number) {
		try {
			const contact = await this.contactsRepository.getContactsByColumn({
				id,
			});

			if (!contact) throw new Error('Contact not found!');

			await this.contactsRepository.deleteContactById(id);
		} catch (error) {
			throw new Error(error.message);
		}
	}
}
