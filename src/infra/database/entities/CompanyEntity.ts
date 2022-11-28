import { ICompanyEntity } from '../../../shared/interfaces/entities/ICompanyEntity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companies')
export class CompanyEntity implements ICompanyEntity {
	@PrimaryGeneratedColumn()
	id: number;

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
	responsible_name: string;

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
	created_at: Date;

	@Column({
		type: 'date',
		nullable: false,
	})
	updated_at: Date;

	@Column({
		type: 'date',
		nullable: true,
	})
	deleted_at: Date | null;
}
