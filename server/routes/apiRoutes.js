import express from 'express';

import * as foodController from '../controllers/foodController.js';
import * as suppliersController from '../controllers/suppliersController.js';

const apiRouter = new express.Router();

apiRouter.get('/food', foodController.getFood);

apiRouter.post('/food', foodController.createFood);

apiRouter.delete('/food/:idFood', foodController.deleteFood);

apiRouter.get('/suppliers', suppliersController.getSuppliers);

apiRouter.post('/suppliers', suppliersController.createSupplier);

apiRouter.get('/suppliers/:idSupplier', foodController.getSuppliersFood);

apiRouter.post('/suppliers/:idSupplier/food', foodController.createFood);

apiRouter.get('/suppliers/:idSupplier/food', foodController.getSuppliersFood);

export default apiRouter;