import { MigrationInterface, QueryRunner } from 'typeorm';

export class createCompaniesTable1669161050813 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			CREATE TABLE companies (
				id SERIAL NOT NULL PRIMARY KEY,
				name VARCHAR(255) NOT NULL,
				document VARCHAR(14) NOT NULL,
				responsibleName VARCHAR(255) NOT NULL,
				email VARCHAR(255) NOT NULL,
				phone VARCHAR(13) NOT NULL,
				createdAt DATE NOT NULL,
				updatedAt DATE NOT NULL DEFAULT CURRENT_DATE,
				deletedAt DATE NOT NULL
			)
		`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			DROP TABLE companies
		`);
	}
}
