var User = require('./User.js');
var Food = require('./Food.js');

module.exports = (sequelize, DataTypes) => {
    const UserAndOrder = sequelize.define('UserAndOrder', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
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
        },
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    return UserAndOrder;
};