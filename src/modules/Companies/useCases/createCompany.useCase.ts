import { ICreateCompany } from '@shared/interfaces/modules/repositories/methods/ICreateCompanyUseCase';
import { Validators } from '@shared/utils/Validators';
import { CompaniesRepository } from '../repositories/companies.repository';

export class CreateCompanyUseCase {
	private validators: Validators;
	private companiesRepository: CompaniesRepository;
	private fieldsToValidate: string[] = [
		'name',
		'document',
		'responsibleName',
		'email',
		'phone',
	];

	constructor() {
		this.validators = new Validators();
		this.companiesRepository = new CompaniesRepository();
	}

	async execute(data: ICreateCompany) {
		try {
			this.validators.validateFields(this.fieldsToValidate, data);

			if (!this.validators.validateCNPJ(data.document))
				throw new Error(`The CNPJ '${data.document}' is invalid!`);

			if (!this.validators.validatePhone(data.phone))
				throw new Error(`The Phone '${data.phone}' is invalid!`);

			if (!this.validators.validateEmail(data.email))
				throw new Error(`The Email '${data.email}' is invalid!`);

			const company = await this.companiesRepository.getCompaniesByColumn({
				document: data.document,
			});

			if (company)
				throw new Error(`The company '${data.document}' already exists!`);

			await this.companiesRepository.create({
				...data,
			});
		} catch (error) {
			throw new Error(error.message);
		}
	}
}
