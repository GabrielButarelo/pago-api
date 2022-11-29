/* eslint-disable no-undef */
module.exports = {
	roots: ['<rootDir>/src'],
	collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
	coverageDirectory: 'coverage',
	testEnvironment: 'node',
	transform: {
		'.+\\.ts$': 'ts-jest',
	},
	moduleNameMapper: {
		'@modules/(.*)': '<rootDir>/src/modules/$1',
		'@infra/(.*)': '<rootDir>/src/infra/$1',
		'@shared/(.*)': '<rootDir>/src/shared/$1',
	},
};
