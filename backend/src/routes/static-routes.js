import { Router } from "express"

const sPostrouter = Router();

sPostrouter.get('/', (req, res) => {
    res.sendFile('index.html')
})