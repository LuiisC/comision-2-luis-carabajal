import { header, param, body } from 'express-validator';
import { isValidObjectId } from 'mongoose';
import { applyValidations } from '../../middlewares/apply-validations.js';

export const createPosteoValidations = [
  body('title')
    .notEmpty().withMessage('El campo { title } no debe estar vacio.')
    .isString().withMessage('El campo { title } debe ser un string.'),
  applyValidations,
];

export const listPosteoValidations = [
  header('authorization').exists(),
  applyValidations,
];

export const getPosteoValidations = [
  param('posteoId')
    .notEmpty().withMessage('El parametro { posteoId } no debe estar vacio.')
    .isString().withMessage('El parametro { posteoId } debe ser un string.')
    .custom(isValidObjectId).withMessage('El parametro { posteoId } debe ser una id valida.'),
  applyValidations,
];

export const updatePosteoValidations = [
  param('posteoId')
    .notEmpty().withMessage('El parametro { posteoId } no debe estar vacio.')
    .isString().withMessage('El parametro { posteoId } debe ser un string.')
    .custom(isValidObjectId).withMessage('El parametro { posteoId } debe ser una id valida.'),
  body('title')
    .optional()
    .notEmpty().withMessage('El campo { title } no debe estar vacio.')
    .isString().withMessage('El campo { title } debe ser un string.'),
  applyValidations,
];

export const deletePosteoValidations = [
  param('posteoId')
    .notEmpty().withMessage('El parametro { posteoId } no debe estar vacio.')
    .isString().withMessage('El parametro { posteoId } debe ser un string.')
    .custom(isValidObjectId).withMessage('El parametro { posteoId } debe ser una id valida.'),
  applyValidations,
];