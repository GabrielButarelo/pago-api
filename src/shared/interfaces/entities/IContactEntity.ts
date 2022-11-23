import { EPixType } from '@shared/enums/EPixType';
import { IBaseEntity } from './IBaseEntity';

export interface IContactEntity extends IBaseEntity {
	companyId: string;
	name: string;
	key: string;
	type: EPixType;
}
