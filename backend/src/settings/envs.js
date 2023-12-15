import { config } from "dotenv"

config();

export const env = {
    PORT: process.env.PORT || 4000,
    MONGODB_URI: process.env.MONGO_URI || "mongodb://127.0.0.1/tpi_db",
    jwt_secret: process.env.JWT_SECRET,
} ;