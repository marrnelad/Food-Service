import db from '../models/index.js';
import { Op } from 'sequelize'

export function getAllOrders(req, res) {

    return db.UserAndOrder
        .findAll({
            include: [
                {model: db.Food},
                {model: db.User}
            ],
            order: [['orderDate', 'DESC'],[db.User,'name']],
        })
        .then(function(orders) {
            if (orders) {
                return res.status(200).send(orders);
            }
            return res.send({
                message: "This user has no orders made."
            });
        })
        .catch(error => {
            return res.send(error);
        });
}

export function getAllOrdersForToday(req, res) {

    return db.UserAndOrder
        .findAll({
            where: {
                orderDate:  new Date()
            },
            include: [
                {model: db.Food},
                {model: db.User}
            ],
            order: [['orderDate', 'DESC'],[db.User,'name']],
        })
        .then(function(orders) {
            if (orders) {
                return res.status(200).send(orders);
            }
            return res.send({
                message: "This user has no orders made."
            });
        })
        .catch(error => {
            return res.send(error);
        });
}
export function getAllOrdersForWeek(req, res) {

    return db.UserAndOrder
        .findAll({
            where: {
                orderDate: {
                    [Op.between]: [new Date(new Date() - 7*24 * 60 * 60 * 1000), new Date()]
                }
            },
            include: [
                {model: db.Food},
                {model: db.User}
            ],
            order: [['orderDate', 'DESC'],[db.User,'name']],
        })
        .then(function(orders) {
            if (orders) {
                return res.status(200).send(orders);
            }
            return res.send({
                message: "This user has no orders made."
            });
        })
        .catch(error => {
            return res.send(error);
        });
}
export function getUserOrders(req, res) {

    return db.UserAndOrder
        .findAll({
            where: {
                idUser: req.params.idUser,
            },
            include: [{
                model: db.Food
            }],
            order: [['createdAt', 'DESC']],
        })
        .then(function(orders) {
            if (orders) {
                return res.status(200).send(orders);
            }
            return res.send({
                message: "This user has no orders made."
            });
        })
        .catch(error => {
            return res.send(error);
        });
}
export function getUserOrdersForToday(req, res) {

    return db.UserAndOrder
        .findAll({
            where: {
                idUser: req.params.idUser,
                orderDate:  new Date()
            },
            include: [{
                model: db.Food
            }],
            order: [['createdAt', 'DESC']],
        })
        .then(function(orders) {
            if (orders) {
                return res.status(200).send(orders);
            }
            return res.send({
                message: "This user has no orders made."
            });
        })
        .catch(error => {
            return res.send(error);
        });
}
export function getUserOrdersForWeek(req, res) {

    return db.UserAndOrder
        .findAll({
            where: {
                idUser: req.params.idUser,
                orderDate: {
                    [Op.between]: [new Date(new Date() - 7*24 * 60 * 60 * 1000), new Date()]
                }
            },
            include: [{
                model: db.Food
            }],
            order: [['createdAt', 'DESC']],
        })
        .then(function(orders) {
            if (orders) {
                return res.status(200).send(orders);
            }
            return res.send({
                message: "This user has no orders made."
            });
        })
        .catch(error => {
            return res.send(error);
        });
}
export function createOrder(req, res) {

    req.body.forEach((orderItem) => {
        return db.UserAndOrder
            .create({
                idUser: orderItem.idUser,
                idFood: orderItem.idFood,
                orderDate: orderItem.orderDate,
                count: orderItem.count,
                price: orderItem.price,
            })
            .then( (orderItem) => {
                if (!orderItem) {
                    return res.status(400).send({
                        message: 'Could not create order item.'
                    });
                }

                return res.status(200).send(req.body);
            })
            .catch(error => res.status(404).send(error));
    });
}

export function deleteOrder(req, res) {

    return db.UserAndOrder
        .findAll({
            where: {
                idUser: req.params.idUser,//uuid: req.params.uuid
                orderDate: req.body.orderDate,
            }
        })
        .then(orders => {
            orders.forEach((orderItem) => {
                orderItem
                    .destroy()
                    .then(() => res.status(200))
            })
        })
        .catch(error => res.status(400).send(error));
}