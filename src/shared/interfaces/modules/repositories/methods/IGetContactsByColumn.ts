import { EPixType } from '@shared/enums/EPixType';

export interface IGetContactsByColumn {
	id?: number;
	companyId?: number;
	name?: string;
	key?: string;
	type?: EPixType;
}
