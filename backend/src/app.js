import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import { env } from "./settings/envs.js";
import { startConnection } from "./settings/database.js"

import { authRouter } from './routes/auth-routes.js';
import { posteoRouter } from './routes/posteo-routes.js';
import { validateToken } from './middlewares/validate-token.js';
import { authHeader } from './models/validations/auth-validation.js';

import { userRouter } from "./routes/user-routes.js";

const app = express();

app.use(morgan("dev"))
app.use(cors())
app.use(helmet())

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//app.use(express.static("public"))


app.use('/api/auth', authRouter);
app.use('/nologin/posteo', posteoRouter);
app.use('/api/posteo', authHeader, validateToken, posteoRouter);


app.listen(env.PORT, async () => {
    await startConnection();
    console.log(`Server on port ${env.PORT}`)
})
