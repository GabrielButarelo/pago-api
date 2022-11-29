import { IContactEntity } from '@shared/interfaces/entities/IContactEntity';
import { ICreateContact } from './methods/ICreateContact';
import { IEditContact } from './methods/IEditContact';
import { IGetContactsByColumn } from './methods/IGetContactsByColumn';

export interface IContactsRepository {
	create(data: ICreateContact): Promise<void>;
	listAllContacts(): Promise<IContactEntity[]>;
	getContactsByColumn(
		data: IGetContactsByColumn
	): Promise<IContactEntity[] | IContactEntity>;
	editContact(data: IEditContact): Promise<void>;
	deleteContactById(id: number): Promise<void>;
}
