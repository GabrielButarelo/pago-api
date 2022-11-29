import { EPixType } from '@shared/enums/EPixType';

export interface IEditContact {
	id: number;
	companyId?: number;
	name?: string;
	key?: string;
	type?: EPixType;
}
