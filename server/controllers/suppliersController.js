import db from '../models/index.js';

export function getSuppliers(req, res) {

    return db.Supplier
        .findAll()
        .then(function(suppliers) {
            if (suppliers.length) {
                return res.send(suppliers);
            }
            return res.send({
                message: "Could not find any supplier."
            });
        })
        .catch(function(error) {
            console.log(error);
            return res.send({
                message: "Error retrieving suppliers."
            });
        });
}

export function createSupplier(req, res) {

    return db.Supplier
        .create({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone
        })
        .save()
        .then(supplier => {
            res.send(supplier);
        })
        .catch(error => {
            message: "Could not create supplier."
        });
}