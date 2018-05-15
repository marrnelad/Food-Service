import db from '../models/index.js';

export function getSuppliers(req, res) {

    return db.Supplier
        .findAll()
        .then((suppliers) => {
            if (suppliers.length > 0) {
                return res.send(suppliers);
            }
            return res.send({
                message: "Could not find any supplier."
            });
        })
        .catch(error =>
            res.send({
                message: "Error retrieving suppliers."
            })
        );
}

export function createSupplier(req, res) {

    return db.Supplier
        .create({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            photo:req.body.photo,
        })
        .then(supplier =>
            res.send(supplier)
        )
        .catch(error =>
            res.send({
                message: "Could not create supplier."
            })
        );
}

export function deleteSupplier(req, res) {

    return db.Supplier
        .findById(req.params.idSupplier)
        .then(supplier => {
            if (!supplier) {
                return res.status(404).send({
                    message: 'Supplier Not Found',
                });
            }

            return supplier
                .destroy()
                .then(() => res.status(200).send(supplier))
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
}