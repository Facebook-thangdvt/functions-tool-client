const { default: mongoose } = require("mongoose")
const { default: FacebookAccount } = require("./dist/models/FacebookAccount.model")


async function main() {
    try {
        await mongoose.connect("mongodb://mongo:bPhHpR4Dyak0WELpkooC@containers-us-west-129.railway.app:7507")
        const account = await FacebookAccount.findById("64d5f63bfcb24d66da21c2de")
        console.log(account)
    } catch (err) {
        console.log(err)
    }
}

main()