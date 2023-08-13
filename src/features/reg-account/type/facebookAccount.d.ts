type TBasicAccount = "username" | "password";

interface IFacebookUserInfo extends Record<TBasicAccount, string> {
	firstName: string;
	surName: string;
	email: string;
	mobileNumber: string;
	dateOfBirth: string;
	// gender: "male" | "female"
	gender: 1 | 2;
}
