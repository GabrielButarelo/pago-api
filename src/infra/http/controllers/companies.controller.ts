import { CreateCompanyUseCase } from '@modules/Companies/useCases/createCompany.useCase';
import { ListAllCompaniesUseCase } from '@modules/Companies/useCases/listAllCompanies.useCase';
import { ICreateCompany } from '@shared/interfaces/modules/repositories/methods/ICreateCompanyUseCase';
import HttpResponse from '@shared/utils/HttpResponse';
import { Request, Response } from 'express';

export class CompaniesController {
	private createCompanyUseCase: CreateCompanyUseCase;
	private listAllCompaniesUseCase: ListAllCompaniesUseCase;

	constructor() {
		this.createCompanyUseCase = new CreateCompanyUseCase();
		this.listAllCompaniesUseCase = new ListAllCompaniesUseCase();
	}

	async create(req: Request, res: Response) {
		try {
			const data: ICreateCompany = req.body;

			await this.createCompanyUseCase.execute(data);

			return HttpResponse.send(res, {
				status: 200,
				message: 'Company created!',
			});
		} catch (error) {
			return HttpResponse.send(res, {
				status: 400,
				message: error.message,
			});
		}
	}

	async listAll(req: Request, res: Response) {
		try {
			const companies = await this.listAllCompaniesUseCase.execute();

			return HttpResponse.send(res, {
				status: 200,
				data: companies,
			});
		} catch (error) {
			return HttpResponse.send(res, {
				status: 400,
				message: error.message,
			});
		}
	}
}
