import { MigrationInterface, QueryRunner } from 'typeorm';

export class createCompanyTable1669161050813 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			CREATE TABLE company (
				id int
			)
		`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			DROP TABLE company
		`);
	}
}
