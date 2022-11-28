import { EPixType } from '../../../shared/enums/EPixType';
import { IContactEntity } from '../../../shared/interfaces/entities/IContactEntity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contacts')
export class ContactEntity implements IContactEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	company_id: string;

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
	created_at: Date;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	updated_at: Date;

	@Column({
		type: 'varchar',
		nullable: true,
	})
	deleted_at: Date | null;
}
