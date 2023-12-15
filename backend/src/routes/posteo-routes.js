import { Router } from 'express';

import { ctrlCreatePosteo, ctrlDeletePosteo, ctrlGetPosteo, ctrlListPosteo,ctrlUpdatePosteo, } from '../controllers/posteo-controller.js';
import { createPosteoValidations, deletePosteoValidations, getPosteoValidations, listPosteoValidations, updatePosteoValidations } from '../models/validations/posteo-validations.js';

const posteoRouter = Router();

posteoRouter.post('/', createPosteoValidations, ctrlCreatePosteo);
posteoRouter.get('/', listPosteoValidations, ctrlListPosteo);

posteoRouter.get('/:posteoId', getPosteoValidations, ctrlGetPosteo);
posteoRouter.patch('/:posteoId', updatePosteoValidations, ctrlUpdatePosteo);
posteoRouter.delete('/:posteoId', deletePosteoValidations, ctrlDeletePosteo);

export { posteoRouter };