import { EPixType } from '@shared/enums/EPixType';
import { IContactEntity } from '@shared/interfaces/entities/IContactEntity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contacts')
export class ContactEntity implements IContactEntity {
	@PrimaryGeneratedColumn()
	id: string;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	companyId: string;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	name: string;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	key: string;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	type: EPixType;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	createdAt: Date;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	updatedAt: Date;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	deletedAt: Date;
}
