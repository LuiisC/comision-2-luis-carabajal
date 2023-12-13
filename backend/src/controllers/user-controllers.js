import { LoginUser, UserModel } from "../models/user-model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { env } from "../settings/envs.js"


export const ctrlLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await LoginUser({ email, password });

    if (!user) return res.sendStatus(404);
     
    const token = jwt.sign({userId: user.id}, env.JWT_SECRET);

    res.status(200).json({ token });
}

export const ctrlCreateUser = async (req, res) => {
    const datos  = await req.body;
    
    try {
        const newUser = {
            name: datos.name,
            email: datos.email,
            password: await bcrypt.hash(datos.password, 10),
            isAdmin: datos.name === "luis",
        }

        const user = await UserModel.create(newUser);
        return res.status(200).json(user);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
} 

export async function ctrlGetUserById(req, res) {
    const { userId } = req.params;

    const user = userModel.findOne({id: userId}, );

    if (!user) {
        return res.sendStatus(404);
    }

    res.status(200).json(user);
}

export const ctrlListUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find({},["-__v", "-_id"]);
        return res.status(201).json(allUsers);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export const ctrlDeleteUser = async (req, res) => {
    const {userId} = req.params;
    try {
        const user = await UserModel.findByIdAndDelete({ _id: userId });
        
        res.sendStatus(200)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }    
}
export const ctrlFindOneUser = async (req, res) => {
    const {userId} = req.params;
    try {
        const user = await UserModel.findOne({ _id: userId });
        if (!user) {
            return res.status(404).json({messaje: "user not found"});
        }

        res.sendStatus(200).json(user)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
export const ctrlUpdateUser = async (req, res) => {
    const { userId } = req.params;

  try {
    const user = await UserModel.findOne({ _id: userId });

    user.set(req.body);

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}