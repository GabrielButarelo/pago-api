import { IBaseEntity } from './IBaseEntity';

export interface ICompanyEntity extends IBaseEntity {
	name: string;
	document: string;
	responsible_name: string;
	email: string;
	phone: string;
}
