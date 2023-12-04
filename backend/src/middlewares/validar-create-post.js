export const validarPost = (req, res, next) => {
    if(req.url === '/posts' && req.method === "POST") {
        if (!req.body.title) return res.status(400).send("Error: title is required")
        if (!req.body.desc) return res.status(400).send("Error: description is required")
        if (!req.body.image) return res.status(400).send("Error: image is required")
    }
    next()
}