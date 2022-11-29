import { IEditCompany } from '@shared/interfaces/modules/repositories/methods/IEditCompany';
import { Validators } from '@shared/utils/Validators';
import { CompaniesRepository } from '../repositories/companies.repository';

export class EditCompanyUseCase {
	private validators: Validators;
	private companiesRepository: CompaniesRepository;
	private fieldsToValidate: string[] = ['id'];

	constructor() {
		this.validators = new Validators();
		this.companiesRepository = new CompaniesRepository();
	}

	async execute(data: IEditCompany) {
		try {
			this.validators.validateFields(this.fieldsToValidate, data);

			if (data.document) {
				if (!this.validators.validateCNPJ(data.document))
					throw new Error(`The CNPJ '${data.document}' is invalid!`);
			}

			if (data.phone) {
				if (!this.validators.validatePhone(data.phone))
					throw new Error(`The Phone '${data.phone}' is invalid!`);
			}

			if (data.email) {
				if (!this.validators.validateEmail(data.email))
					throw new Error(`The Email '${data.email}' is invalid!`);
			}

			const company = await this.companiesRepository.getCompaniesByColumn({
				id: data.id,
			});

			if (!company) throw new Error(`The company not exists!`);

			await this.companiesRepository.edit({
				...data,
			});
		} catch (error) {
			throw new Error(error.message);
		}
	}
}
