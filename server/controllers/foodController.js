import db from '../models/index.js';

export function getFood(req, res) {

    return db.Food
        .findAll()
        .then(function(food) {
            if (food.length > 0) {
                return res.send(food);
            }
            return res.send({
                message: "Could not find any food."
            });
        })
        .catch(error => res.status(400).send(error));
}

export function createFood(req, res) {

    return db.Food
        .create({
            title: req.body.title,
            description: req.body.description,
            available: req.body.available,
            price: req.body.price
        })
        .then(food => {
            db.FoodAndSupplier
                .create({
                    idFood: food.dataValues.uuid,
                    idSupplier: req.params.idSupplier
                })
                .then(foodAndSupplierItem => {
                    if (!foodAndSupplierItem) {
                        return res.status(400).send({
                            message: 'Could not create FoodAndSupplierItem'
                        });
                    }
                })
                .catch(error => res.status(400).send(error));

            return res.status(200).send(food);
        })
        .catch(error => res.status(400).send(error));
}

export function getSuppliersFood(req, res) {

    return db.Food
        .findAll({
            include: [{
                model: db.FoodAndSupplier,
                where: { idSupplier: req.params.idSupplier}
            }],
            includeIgnoreAttributes: false
        })
        .then(function(food) {
            if (food.length) {
                return res.send(food);
            }
            return res.send({
                message: "Could not find any food."
            });
        })
        .catch(error => {
            return res.status(400).send(error);
        })
}

export function getAvailableSuppliersFood(req, res) {

    return db.Food
        .findAll({
            include: [{
                model: db.FoodAndSupplier,
                where: { idSupplier: req.params.idSupplier}
            }],
            where: { available: true },
            includeIgnoreAttributes: false
        })
        .then(function(food) {
            if (food.length) {
                return res.send(food);
            }
            return res.send({
                message: "Could not find any available food."
            });
        })
        .catch(error => res.status(400).send(error))
}

export function setAvailableFood(req, res) {

    return db.Food
        .findById(req.params.idFood)
        .then(function(foodItem) {
            if (foodItem) {
                return foodItem
                    .update({
                        available: false
                    })
                    .then(() => res.status(200).send(foodItem))
                    .catch(error => res.status(400).send(error));
            }

            return res.send({
                message: "Could not find specified food."
            });
        })
        .catch(error => res.status(400).send(error))
}

export function deleteFood(req, res) {

    return db.Food
        .findById(req.params.idFood)
        .then(foodItem => {
            if (!foodItem) {
                return res.status(404).send({
                    message: 'FoodItem Not Found',
                });
            }

            return foodItem
                .destroy()
                .then(() => res.status(200).send(foodItem))
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
}