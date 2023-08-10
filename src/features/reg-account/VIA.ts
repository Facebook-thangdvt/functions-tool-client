import { Proxy, composeProxyServer } from "./Proxy";
import Chance from "chance";

const chance = new Chance();
const randomFristName = chance.first();
const randomLastName = chance.last();
const year = chance.year({ min: 1980, max: 2001 });
const randomDateOfBirth = chance
	.birthday({ year: year })
	.toLocaleString()
	.split(",")[0];
const randomGender = chance.gender();

class VIA implements IVIA {
	username = "";
	email = "";

	password = "";
	proxy = new Proxy();

	firstName = randomFristName;
	surName = randomLastName;
	mobileNumber = "";
	dateOfBirth = randomDateOfBirth;
	gender: IVIA["gender"] = randomGender;

	getProxyServerArgs() {
		const proxyServer = composeProxyServer(this.proxy);

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

	setProxy(proxy: IVIA["proxy"]) {
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
