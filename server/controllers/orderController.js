import db from '../models/index.js';

export function getUserOrders(req, res) {

    return db.UserAndOrder
        .findAll({
            include: [{
                model: db.Food,
                where: { idUser: req.params.idUser}
            }],
            includeIgnoreAttributes: false
        })
        // .findAll({
        //   where: {
        //     idUser: req.params.idUser
        //   },
        //   include: [{
        //     model: db.Food
        //   }],
        // })
        .then(function(orders) {
            if (orders) {
                return res.status(200).send(orders);
            }
            return res.send({
                message: "This user has no orders made."
            });
        })
        .catch(error => {
            return res.status(400).send(error);
        });
}

export function createOrder(req, res) {
    let foods = req.body;
    foods.forEach((orderItem) => {
        return db.UserAndOrder
            .create({
                idUser: orderItem.idUser,
                idFood: orderItem.uuid,
                orderDate: orderItem.orderDate,
                count: orderItem.count,
            })
            .then( (orderItem) => {
                if (!orderItem) {
                    return res.status(400).send({
                        message: 'Could not create order item.'
                    });
                }

                return res.status(200);
            })
            .catch(error => res.status(400).send(error));
    });
}

export function deleteOrder(req, res) {

    return db.UserAndOrder
        .findAll({
            where: {
                idUser: req.params.idUser,
                orderDate: req.body.orderDate,
            }
        })
        .then(orders => {
            orders.forEach((orderItem) => {
                orderItem
                    .destroy()
                    .then(() => res.status(200))
                    .catch(error => res.status(400).send(error));
            })
        })
        .catch(error => res.status(400).send(error));
}