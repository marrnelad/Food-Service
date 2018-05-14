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
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        idFood: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Food,
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
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