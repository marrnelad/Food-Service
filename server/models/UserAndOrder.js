export default (sequelize, DataTypes) => {
    const UserAndOrder = sequelize.define('UserAndOrder', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: DataTypes.UUID,
            allowNull: false
        },
        idFood: {
            type: DataTypes.UUID,
            allowNull: false
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