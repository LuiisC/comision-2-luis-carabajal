export const validarPost = (req, res, next) => {
    const {title, desc, image } = req.body;

        if (!title) return res.status(400).send("Error: title is required")
        if (!desc) return res.status(400).send("Error: description is required")
        if (!image) return res.status(400).send("Error: image is required")
        
    next()
}