import FacebookAccount from "../models/FacebookAccount.model"

type createAccountInput = {
    email: string,
    password: string,
    cookies?: string
}

export default class FacebookAccountController {

    static createAccount = async ({ email, password, cookies }:createAccountInput) => {

        const existedAccount = await FacebookAccount.findOne({ email })

        if (!existedAccount) {
            await FacebookAccount.create({ email, password, cookies })
        } else {
            console.log(`update new cookie`)
            existedAccount.cookies = String(cookies)
            await existedAccount.save()
        }
    }
}