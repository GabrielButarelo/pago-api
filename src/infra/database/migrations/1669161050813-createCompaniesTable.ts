import { MigrationInterface, QueryRunner } from 'typeorm';

export class createCompaniesTable1669161050813 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			CREATE TABLE companies (
				id SERIAL NOT NULL PRIMARY KEY,
				name VARCHAR(255) NOT NULL,
				document VARCHAR(20) NOT NULL,
				responsible_name VARCHAR(255) NOT NULL,
				email VARCHAR(255) NOT NULL,
				phone VARCHAR(20) NOT NULL,
				created_at DATE NOT NULL,
				updated_at DATE NOT NULL DEFAULT CURRENT_DATE,
				deleted_at DATE
			)
		`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			DROP TABLE companies
		`);
	}
}
