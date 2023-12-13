import { config } from "dotenv"

config();

export const env = {
    PORT: process.env.PORT || 4000,
    MONGODB_URI: process.env.MONGO_URI,
} ;