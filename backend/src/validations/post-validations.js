import { body } from "express-validator"

export const createPostValidations = [
    body("title").notEmpty().withMessage("Se requiere un titulo"),
    body("desc").notEmpty().withMessage("Se requiere una descripcion"),
    body("image").notEmpty().withMessage("Se requiere una imagen").isURL()
];

export const updatePostValidations = [
    body("title").optional,
    body("desc").notEmpty().withMessage("Se requiere una descripcion"),
    body("image").notEmpty().withMessage("Se requiere una imagen").isURL()
];