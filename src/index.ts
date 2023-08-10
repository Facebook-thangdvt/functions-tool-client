import { Builder, Browser, By } from "selenium-webdriver";
import { io } from "socket.io-client";

import accounts from "./dummy/accounts";
import { login } from "./features";
import { LikeBtnXpath } from "./xpaths";

async function facebook(user: { email: string; password: string }) {
	const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
	try {
		let socket = io("http://localhost:7777");

		await driver.get(`https://facebook.com`);

		await login(driver, { email: user.email, password: user.password });

		// trong truong hop can thiet phai su dung den cookie: https://viblo.asia/p/tao-mot-tro-ly-ao-tren-facebook-tu-dong-gui-tin-tuc-moi-nhat-hang-ngay-bang-python-selenium-eW65G1L9ZDO

		/*
            - Xu ly event voi socket (client)
            - Vi du cac event nhu like, follow cho 1 user nao do

            Vi du: socket.on("like", data => {
                // chuyen huong driver toi ${data.to}
                // xu ly like, follow, ...
            })
        */
		socket.on("like", async (data) => {
			try {
				await driver.get(`https://facebook.com/${data.to}`);
				await driver.sleep(3000);
				await driver.findElement(By.xpath(LikeBtnXpath)).click();

				socket.emit("liked", {
					msg: `${user.email} liked to ${data.to}`,
					data: { action: "like", email: user.email, to: data.to },
				});

				// Se phai xu ly loi neu user die
			} catch (err) {
				console.log(`already liked`);
			}
		});
	} catch (err) {
		console.log(err);
		await driver.quit();
	}
}
const handers = accounts.map((i) => facebook(i));

Promise.all(handers);
