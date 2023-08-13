import { Proxy } from "./Proxy";

class VIA implements IVIA {
	username = "";
	email = "";

	password = "";
	proxy = new Proxy();

	firstName = "";
	surName = "";
	mobileNumber = "";
	dateOfBirth = "";
	gender: IVIA["gender"] = 1;

	getProxyServerArgs() {
		const proxyServer = this.proxy.compose();

		return `--proxy-server=${proxyServer}`;
	}

	register() {}
}

export class VIABuilder {
	via = new VIA();

	setUsername(username: IVIA["username"]) {
		this.via.username = username;

		return this;
	}

	setPassword(password: IVIA["password"]) {
		this.via.password = password;

		return this;
	}

	setProxy(proxy: Proxy) {
		this.via.proxy = proxy;

		return this;
	}

	setFirstName(firstName: IVIA["firstName"]) {
		this.via.firstName = firstName;

		return this;
	}

	setSurName(surName: IVIA["surName"]) {
		this.via.surName = surName;

		return this;
	}

	setEmail(email: IVIA["email"]) {
		this.via.email = email;

		return this;
	}

	setMobileNumber(mobileNumber: IVIA["mobileNumber"]) {
		this.via.mobileNumber = mobileNumber;

		return this;
	}

	setDateOfBirth(dateOfBirth: IVIA["dateOfBirth"]) {
		this.via.dateOfBirth = dateOfBirth;

		return this;
	}

	setGender(gender: IVIA["gender"]) {
		this.via.gender = gender;

		return this;
	}

	build() {
		return this.via;
	}
}
