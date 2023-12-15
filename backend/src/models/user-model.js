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
    posteo: [
        {
            type: Types.ObjectId,
            ref: "Posteo",
        }
    ],
},{
    timestamps: true,
    versionKey: false
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
  
    const hash = await bcrypt.hash(this.password, 10);
  
    this.password = hash;
    next();
  });
  

export const UserModel = model("User", UserSchema);