const SELECTOR = {
	createAccount: 'a[data-testid="open-registration-form-button"]',
	firstName: 'input[name="firstname"]',
	surName: 'input[name="lastname"]',
	email: 'input[name="reg_email__"]',
	emailConfirm: 'input[name="reg_email_confirmation__"]',
	password: 'input[name="reg_passwd__"]',
	day: 'select[name="birthday_day"]',
	month: 'select[name="birthday_month"]',
	year: 'select[name="birthday_year"]',
	getGenderSelector: (random: 1 | 2) =>
		`span[data-name="gender_wrapper"] > span:nth-child(${random})`,
};

export default SELECTOR;
