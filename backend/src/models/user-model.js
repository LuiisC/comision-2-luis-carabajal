import bcrypt from "bcrypt";
import { Schema, model, Types } from "mongoose";


const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    tasks: [
        {
            type: Types.ObjectId,
            ref: "Task",
        }
    ],
});

export const UserModel = model("User", UserSchema);


export const LoginUser = async ({email, password}) => {
    const user = await getUserByEmail({ email });

    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return null;
    }
    return user;
}