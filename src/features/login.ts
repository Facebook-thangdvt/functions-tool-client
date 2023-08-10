import type { WebDriver } from "selenium-webdriver"
import { By } from "selenium-webdriver"
import { LoginBtnXpath } from "../xpaths"

type LoginInput = { email: string, password: string }

export default async function login(driver: WebDriver, { email, password }: LoginInput) {
    try {
        await driver.findElement(By.id("email")).sendKeys(email)
        await driver.findElement(By.id("pass")).sendKeys(password)

        await driver.findElement(By.xpath(LoginBtnXpath)).click()

        let cookies = await driver.manage().getCookies()

        // save cookie to db

    } catch (error) {
        console.log(error)
    }
}