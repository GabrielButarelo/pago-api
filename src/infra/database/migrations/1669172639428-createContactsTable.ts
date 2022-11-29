import { MigrationInterface, QueryRunner } from 'typeorm';

export class createContactsTable1669172639428 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			CREATE TABLE contacts (
				id SERIAL NOT NULL PRIMARY KEY,
				company_id SERIAL NOT NULL REFERENCES companies(id),
				name VARCHAR(255) NOT NULL,
				key VARCHAR(255) NOT NULL,
				type VARCHAR(255) NOT NULL CHECK (type in ('CPF', 'CNPJ', 'EMAIL', 'PHONE', 'RANDOM_KEY')),
				created_at DATE NOT NULL,
				updated_at DATE NOT NULL DEFAULT CURRENT_DATE,
				deleted_at DATE
			)
		`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			DROP TABLE contacts
		`);
	}
}
