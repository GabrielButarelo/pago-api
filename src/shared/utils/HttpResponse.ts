import { IHttpResponse } from '@shared/interfaces/utils/IHttpResponse';
import { Response } from 'express';

export default class HttpResponse {
	static send(res: Response, data: IHttpResponse) {
		return res.status(data.status).json(data);
	}
}
