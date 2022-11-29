import { appDataSource } from '@infra/database';
import { CompanyEntity } from '@infra/database/entities/CompanyEntity';
import { ICompanyEntity } from '@shared/interfaces/entities/ICompanyEntity';
import { ICompaniesRepository } from '@shared/interfaces/modules/repositories/ICompaniesRepository';
import { ICreateCompany } from '@shared/interfaces/modules/repositories/methods/ICreateCompany';
import { IEditCompany } from '@shared/interfaces/modules/repositories/methods/IEditCompany';
import { IGetCompaniesByColumn } from '@shared/interfaces/modules/repositories/methods/IGetCompaniesByColumn';
import { Repository } from 'typeorm';

export class CompaniesRepository implements ICompaniesRepository {
	private repository: Repository<CompanyEntity>;

	constructor() {
		this.repository = appDataSource.getRepository(CompanyEntity);
	}

	async create(data: ICreateCompany): Promise<void> {
		try {
			const newCompany = this.repository.create({
				name: data.name,
				phone: data.phone,
				responsible_name: data.responsibleName,
				document: data.document,
				email: data.email,
				created_at: new Date(),
			});

			await this.repository.save(newCompany);

			return;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async getCompaniesByColumn(
		data: IGetCompaniesByColumn
	): Promise<ICompanyEntity[] | ICompanyEntity> {
		try {
			if (data.id || data.document) {
				const company = this.repository.findOne({
					where: {
						...data,
					},
				});

				return company;
			}

			const companies = this.repository.find({
				where: {
					...data,
				},
			});

			return companies;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	listAllCompanies(): Promise<ICompanyEntity[]> {
		try {
			const companies = this.repository.find();

			return companies;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	edit(data: IEditCompany): Promise<void> {
		try {
			this.repository.save({
				...data,
			});

			return;
		} catch (error) {
			throw new Error(error.message);
		}
	}
}
