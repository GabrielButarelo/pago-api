import { MigrationInterface, QueryRunner } from 'typeorm';

export class createContactsTable1669172639428 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			CREATE TABLE contacts (
				id SERIAL NOT NULL PRIMARY KEY,
				companyId SERIAL NOT NULL REFERENCES companies(id),
				name VARCHAR(255) NOT NULL,
				key VARCHAR(255) NOT NULL,
				type VARCHAR(255) NOT NULL CHECK (type in ('CPF', 'CNPJ', 'EMAIL', 'PHONE', 'RANDOM_KEY')),
				createdAt DATE NOT NULL,
				updatedAt DATE NOT NULL DEFAULT CURRENT_DATE,
				deletedAt DATE NOT NULL
			)
		`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			DROP TABLE contacts
		`);
	}
}
