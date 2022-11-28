/* eslint-disable no-useless-escape */
/* eslint-disable no-prototype-builtins */
export class Validators {
	private regexPhone = /^\([1-9]{2}\) 9[7-9]{1}[0-9]{3}\-[0-9]{4}$/;
	private regexCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
	private regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

	validateCNPJ(cnpj: string) {
		return this.regexCNPJ.test(cnpj);
	}

	validatePhone(phone: string) {
		return this.regexPhone.test(phone);
	}

	validateEmail(email: string) {
		return this.regexEmail.test(email);
	}

	validateFields(fields: string[], data: object) {
		for (const field of fields) {
			if (!data.hasOwnProperty(field))
				throw new Error(`The field '${field}' is required!`);
		}
	}
}
