import { CompaniesRepository } from '../repositories/companies.repository';

export class ListCompanyByIdUseCase {
	private companiesRepository: CompaniesRepository;

	constructor() {
		this.companiesRepository = new CompaniesRepository();
	}

	async execute(id: number) {
		try {
			const company = await this.companiesRepository.getCompaniesByColumn({
				id,
			});

			if (!company) throw new Error(`No company found`);

			return company;
		} catch (error) {
			throw new Error(error.message);
		}
	}
}
