import { EPixType } from '@shared/enums/EPixType';
import { IBaseEntity } from './IBaseEntity';

export interface IContactEntity extends IBaseEntity {
	company_id: number;
	name: string;
	key: string;
	type: EPixType;
}
