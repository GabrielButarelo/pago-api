import { CompaniesRepository } from '@modules/Companies/repositories/companies.repository';
import { ICreateContact } from '@shared/interfaces/modules/repositories/methods/ICreateContact';
import { Validators } from '@shared/utils/Validators';
import { ContactsRepository } from '../repositories/contacts.repository';

export class CreateContactUseCase {
	private validators: Validators;
	private contactsRepository: ContactsRepository;
	private companiesRepository: CompaniesRepository;
	private fieldsToValidate: string[] = ['companyId', 'name', 'key', 'type'];

	constructor() {
		this.validators = new Validators();
		this.contactsRepository = new ContactsRepository();
		this.companiesRepository = new CompaniesRepository();
	}

	async execute(data: ICreateContact) {
		try {
			this.validators.validateFields(this.fieldsToValidate, data);

			const company = await this.companiesRepository.getCompaniesByColumn({
				id: data.companyId,
			});

			if (!company) throw new Error('Company not found!');

			await this.contactsRepository.create({
				...data,
			});
		} catch (error) {
			throw new Error(error.message);
		}
	}
}
