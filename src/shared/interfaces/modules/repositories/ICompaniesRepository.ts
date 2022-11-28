import { ICompanyEntity } from '@shared/interfaces/entities/ICompanyEntity';
import { ICreateCompany } from './methods/ICreateCompanyUseCase';
import { IGetCompaniesByColumn } from './methods/IGetCompaniesByColumn';

export interface ICompaniesRepository {
	create(data: ICreateCompany): Promise<void>;
	getCompaniesByColumn(
		data: IGetCompaniesByColumn
	): Promise<ICompanyEntity[] | ICompanyEntity>;
	listAllCompanies(): Promise<ICompanyEntity[]>;
}
