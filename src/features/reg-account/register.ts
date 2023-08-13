import puppeteer from "puppeteer";
import { Proxy } from "./Proxy";
import { VIABuilder } from "./VIA";
import SELECTOR from "./selector";
import RANDOM_INFO from "./randomInfo";

const PROXY = {
	host: "http://168.181.55.145",
	port: "8000",
	username: "rgMfDg",
	password: "JdSkZ8",
};

const FB_URL = "https://www.facebook.com/";
const IDLE_TIME = 5000;

async function register(_viaEmail: string, _viaPassword: string) {
	// SaraMckeeijbxd@outlook.com
	// Kkfgpr451k

	const proxy = new Proxy({
		host: PROXY.host,
		port: PROXY.port,
		username: PROXY.username,
		password: PROXY.password,
	});

	const viaBuilder = new VIABuilder();
	const facebookAccount = viaBuilder
		.setProxy(proxy)
		.setEmail("SaraMckeeijbxd@outlook.com")
		.setPassword(Math.random().toString(36).slice(-8))
		.setFirstName(RANDOM_INFO.firstName)
		.setSurName(RANDOM_INFO.lastName)
		.setDateOfBirth(RANDOM_INFO.dateOfBirth)
		.setGender(RANDOM_INFO.gender)
		.build();
	console.log(
		"🚀 ~ file: register.ts:39 ~ register ~ facebookAccount:",
		facebookAccount
	);

	const browser = await puppeteer.launch({
		headless: false,
		args: [facebookAccount.getProxyServerArgs()],
	});
	const page = await browser.newPage();
	await page.authenticate({
		username: facebookAccount.proxy.username,
		password: facebookAccount.proxy.password,
	});

	await page.goto(FB_URL, {
		waitUntil: "networkidle0",
	});

	await page.setViewport({ width: 1080, height: 1024 });
	await idle();

	const createAccountBtn = await page.waitForSelector(SELECTOR.createAccount);
	createAccountBtn?.click();
	await idle();

	await page.type(SELECTOR.firstName, facebookAccount.firstName);
	await idle();

	await page.type(SELECTOR.surName, facebookAccount.surName);
	await idle();

	await page.type(SELECTOR.email, facebookAccount.email);
	await idle();

	await page.type(SELECTOR.emailConfirm, facebookAccount.email);
	await idle();

	await page.type(SELECTOR.password, facebookAccount.password);
	await idle();

	const [month, day, year] = facebookAccount.dateOfBirth.split("/");

	await page.select(SELECTOR.day, day);
	await idle();

	await page.select(SELECTOR.month, month);
	await idle();

	await page.select(SELECTOR.year, year);
	await idle();

	const genderSelector = SELECTOR.getGenderSelector(facebookAccount.gender);
	const selectGenderBtn = await page.waitForSelector(genderSelector);
	selectGenderBtn?.click();
	await idle();

	console.log("done !");
}

function idle() {
	return new Promise((resolve) => {
		setTimeout(resolve, IDLE_TIME);
	});
}

function errorHandler(fn: Function) {
	return (viaEmail: string, viaPassword: string) =>
		Promise.resolve(fn(viaEmail, viaPassword)).catch((err: Error) =>
			console.log(err)
		);
}

export default errorHandler(register);
