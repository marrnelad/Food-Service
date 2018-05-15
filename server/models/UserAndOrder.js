import User from './User.js';
import Food from './Food.js';

export default (sequelize, DataTypes) => {
    const UserAndOrder = sequelize.define('UserAndOrder', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            }
        },
        idFood: {
            type: DataTypes.UUID,
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