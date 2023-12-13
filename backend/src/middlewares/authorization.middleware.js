export const authorizationMiddleware = (req, res, next) => {
    console.log("Entro al AUTHORIZATION")
    if (!req.user.isAdmin) return res.status(401).send(`Unauthorized, user: ${req.user.name} is not Admin`);

    next();
}