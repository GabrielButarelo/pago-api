import HttpResponse from '@shared/utils/HttpResponse';
import { Request, Response } from 'express';

export default class CompaniesController {
	create(req: Request, res: Response) {
		return HttpResponse.send(res, {
			status: 200,
			message: 'Hello World',
		});
	}
}
