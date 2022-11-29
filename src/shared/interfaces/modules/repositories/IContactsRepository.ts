import { IContactEntity } from '@shared/interfaces/entities/IContactEntity';
import { ICreateContact } from './methods/ICreateContact';

export interface IContactsRepository {
	create(data: ICreateContact): Promise<void>;
	listAllContacts(): Promise<IContactEntity[]>;
}
