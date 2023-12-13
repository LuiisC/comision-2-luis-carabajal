import bcrypt from "bcrypt";
import { Schema, model, Datatype } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique:true,
    },
    email: {
        type: String,
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
});

const UserModel = model("User", UserSchema);

let listOfUsers = [];

const createNewUser = async ({ name, email, password }) => {
        
    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = { 
        name,
        email,
        password: hashedPassword,
        isAdmin: name === "luis"
    };

    const user = await UserModel.create(newUser);
    
    return user;
} 

const getOneUser = async ({id}) => {
    const user = await UserModel.findById(id);
    
    return user;
}

const getAllUsers = async () => {
    const user = await UserModel.find();

    return user;
}

const getUserByEmail = async ({email}) => {
    const user = await UserModel.findOne({email});

    return user;
}

const LoginUser = async ({email, password}) => {
    const user = await UserModel.findOne({email});

    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return null;
    }
    return user;
}

export const updateUser = async ({id, datos}) => {
   const user = await UserModel.findByIdAndUpdate(id, datos, {new: true});

   return user;
}

export const deleteUser = async ({id, datos}) => {
    await UserModel.findByIdAndDelete(id);
 }

export const userModel = {
    create: createNewUser,
    findOne: getOneUser,
    findByEmail: getUserByEmail,
    update: updateUser,
    destroy: deleteUser,
}
export {UserModel}