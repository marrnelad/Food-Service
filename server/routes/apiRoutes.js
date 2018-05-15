import express from 'express';

import * as foodController from '../controllers/foodController.js';
import * as suppliersController from '../controllers/suppliersController.js';
import * as orderController from '../controllers/orderController.js';

const apiRouter = new express.Router();

apiRouter.get('/suppliers', suppliersController.getSuppliers);

apiRouter.post('/suppliers', suppliersController.createSupplier);

apiRouter.delete('/suppliers/:idSupplier', suppliersController.deleteSupplier);

apiRouter.get('/suppliers/:idSupplier/food', foodController.getSuppliersFood);

apiRouter.get('/suppliers/:idSupplier/availableFood', foodController.getAvailableSuppliersFood);

apiRouter.post('/suppliers/:idSupplier/food', foodController.createFood);

apiRouter.put('/food/:idFood', foodController.setAvailableFood);

apiRouter.delete('/food/:idFood', foodController.deleteFood);

apiRouter.get('/admin/userOrders', orderController.getAllOrders);

apiRouter.get('/admin/userOrders/today', orderController.getAllOrdersForToday);

apiRouter.get('/admin/userOrders/week', orderController.getAllOrdersForWeek);

apiRouter.get('/users/:idUser/orders', orderController.getUserOrders);

apiRouter.get('/users/:idUser/orders/today', orderController.getUserOrdersForToday);

apiRouter.get('/users/:idUser/orders/week', orderController.getUserOrdersForWeek);

apiRouter.post('/users/:idUser/orders', orderController.createOrder);

apiRouter.delete('/users/:idUser/orders', orderController.deleteOrder);

export default apiRouter;