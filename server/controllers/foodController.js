import db from '../models/index.js';

export function getFood(req, res) {

    return db.Food.findAll()
        .then(function(food) {
            if (food.length) {
                return res.send(food);
            }
            return res.send({
                message: "Could not find any food."
            });
        })
        .catch(function(error) {
            return res.send({
                message: "Error retrieving food."
            });
        });
}

export function createFood(req, res) {

    return db.Food
        .build({
            title: req.body.title,
            description: req.body.description,
            available: req.body.available,
            price: req.body.price
        })
        .save()
        .then(food => {
            res.send(food);
        })
        .catch(error => {
            message: "Could not create food."
        });
}

export function getSuppliersFood(req, res) {

    return db.Food.findAll({
        include: [{
            model: db.FoodAndSupplier,
            where: { idSupplier: req.params.idSupplier}
        }]
    })
        .then(function(food) {
            if (food.length) {
                return res.send(food);
            }
            return res.send({
                message: "Could not find any food."
            });
        })
        .catch(function(error) {

            return res.send({
                message: "Error retrieving food."
            });
        });
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
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
}