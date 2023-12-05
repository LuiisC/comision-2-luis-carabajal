import express from "express";

import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import { postRouter } from "./routes/post-routes.js";
import { validarPost } from "./middlewares/validar-post.js"


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

app.use(validarPost)
app.use(postRouter)

//Metodos GET, POST, PATCH, PUT
app.get('/', (req, res) => {
    res.sendFile('index.html')
})


app.listen(3000)
console.log("Server on port 3000")