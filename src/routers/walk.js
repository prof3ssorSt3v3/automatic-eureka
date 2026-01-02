import { Router } from 'express';
import walkController from '../controllers/walk';

const walkRouter = Router();

walkRouter.post('/', walkController.create);
walkRouter.get('/', walkController.getAll);
walkRouter.get('/:id', walkController.getOne);
walkRouter.put('/:id', walkController.replace);
walkRouter.patch('/:id', walkController.update);
walkRouter.delete('/:id', walkController.deleteOne);

export default walkRouter;
