var Supplier = require('./Supplier.js');
var Food = require('./Food.js');

module.exports = (sequelize, DataTypes) => {
    const FoodAndSupplier = sequelize.define('FoodAndSupplier', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        idSupplier: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Supplier,
                key: 'id',
            }
        },
        idFood: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Food,
                key: 'id',
            }
        }
    });

    return FoodAndSupplier;
};