import { ICreateContact } from './methods/ICreateContact';

export interface IContactsRepository {
	create(data: ICreateContact): Promise<void>;
}
