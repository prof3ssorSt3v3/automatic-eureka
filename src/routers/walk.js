import { Router } from 'express';
import { create, getAll, getOne, replace, update, deleteOne } from '../controllers/walk.js';

const walkRouter = Router();

walkRouter.post('/', create);
walkRouter.get('/', getAll);
walkRouter.get('/:id', getOne);
walkRouter.put('/:id', replace);
walkRouter.patch('/:id', update);
walkRouter.delete('/:id', deleteOne);

export default walkRouter;
