import { CompaniesRepository } from '../repositories/companies.repository';

export class ListAllCompaniesUseCase {
	private companiesRepository: CompaniesRepository;

	constructor() {
		this.companiesRepository = new CompaniesRepository();
	}

	async execute() {
		try {
			const companies = await this.companiesRepository.listAllCompanies();

			if (!companies.length) throw new Error(`No companies found`);

			return companies;
		} catch (error) {
			throw new Error(error.message);
		}
	}
}
