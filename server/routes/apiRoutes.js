import express from 'express';

import * as foodController from '../controllers/foodController.js';
import * as suppliersController from '../controllers/suppliersController.js';

const apiRouter = new express.Router();

apiRouter.get('/suppliers', suppliersController.getSuppliers);

apiRouter.post('/suppliers', suppliersController.createSupplier);

apiRouter.delete('/suppliers/:idSupplier', suppliersController.deleteSupplier);

apiRouter.get('/suppliers/:idSupplier/food', foodController.getSuppliersFood);

apiRouter.post('/suppliers/:idSupplier/food', foodController.createFood);

apiRouter.delete('/suppliers/:idSupplier/food/:idFood', foodController.deleteFood);

export default apiRouter;