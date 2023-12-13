import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import { postRouter } from "./routes/post-routes.js";
import { env } from "./settings/envs.js";
import { authenticationMiddleware } from "./middlewares/authentication-middelware.js";
import { authorizationMiddleware } from "./middlewares/authorization.middleware.js"
import { userRouter } from "./routes/user-routes.js";
import { startConnection } from "./settings/database.js"

const app = express();
//req tiene tod la informacion del cliente que hace la peticion
//res metodo para responder al cliente
//Middleware comunes
app.use(morgan("dev"))
app.use(cors())
app.use(helmet())

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))

//Validaciones personalizadas
app.use("/posts", authenticationMiddleware, authorizationMiddleware, postRouter)
app.use("/users", userRouter)


app.listen(env.PORT, async () => {
    await startConnection();
    console.log(`Server on port ${env.PORT}`)
})
