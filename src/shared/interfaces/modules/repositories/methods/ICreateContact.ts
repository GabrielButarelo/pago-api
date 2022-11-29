import { EPixType } from '@shared/enums/EPixType';

export interface ICreateContact {
	companyId: number;
	name: string;
	key: string;
	type: EPixType;
}
