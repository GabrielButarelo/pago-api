import { ICompanyEntity } from '@shared/interfaces/entities/ICompanyEntity';
import { ICreateCompany } from './methods/ICreateCompanyUseCase';
import { IEditCompany } from './methods/IEditCompany';
import { IGetCompaniesByColumn } from './methods/IGetCompaniesByColumn';

export interface ICompaniesRepository {
	create(data: ICreateCompany): Promise<void>;
	edit(data: IEditCompany): Promise<void>;
	getCompaniesByColumn(
		data: IGetCompaniesByColumn
	): Promise<ICompanyEntity[] | ICompanyEntity>;
	listAllCompanies(): Promise<ICompanyEntity[]>;
}
