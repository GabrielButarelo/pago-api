import { CompaniesRepository } from '@modules/Companies/repositories/companies.repository';
import { IEditContact } from '@shared/interfaces/modules/repositories/methods/IEditContact';
import { Validators } from '@shared/utils/Validators';
import { ContactsRepository } from '../repositories/contacts.repository';

export class EditContactUseCase {
	private validators: Validators;
	private contactsRepository: ContactsRepository;
	private companiesRepository: CompaniesRepository;
	private fieldsToValidate: string[] = ['id'];

	constructor() {
		this.validators = new Validators();
		this.contactsRepository = new ContactsRepository();
		this.companiesRepository = new CompaniesRepository();
	}

	async execute(data: IEditContact) {
		try {
			this.validators.validateFields(this.fieldsToValidate, data);

			const company = await this.companiesRepository.getCompaniesByColumn({
				id: data.companyId,
			});

			if (!company) throw new Error('Company not found!');

			const contact = await this.contactsRepository.getContactsByColumn({
				id: data.id,
			});

			if (!contact) throw new Error('Contact not found!');

			await this.contactsRepository.editContact({
				...data,
			});
		} catch (error) {
			throw new Error(error.message);
		}
	}
}
