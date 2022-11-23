import { IBaseEntity } from './IBaseEntity';

export interface ICompanyEntity extends IBaseEntity {
	name: string;
	document: string;
	responsibleName: string;
	email: string;
	phone: string;
}
