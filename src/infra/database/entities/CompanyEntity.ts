import { ICompanyEntity } from '@shared/interfaces/entities/ICompanyEntity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companies')
export class CompanyEntity implements ICompanyEntity {
	@PrimaryGeneratedColumn()
	id: string;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	name: string;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	document: string;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	responsibleName: string;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	email: string;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	phone: string;

	@Column({
		type: 'date',
		nullable: false,
	})
	createdAt: Date;

	@Column({
		type: 'date',
		nullable: false,
	})
	updatedAt: Date;

	@Column({
		type: 'date',
		nullable: false,
	})
	deletedAt: Date;
}
