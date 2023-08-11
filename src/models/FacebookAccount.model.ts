import { Schema, model, connect } from 'mongoose'

interface IFacebookAccount {
    email: string
    password: string
    cookies: string
}

const userSchema = new Schema<IFacebookAccount>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cookies: String
});

const FacebookAccount = model<IFacebookAccount>('FacebookAccount', userSchema);
export default FacebookAccount