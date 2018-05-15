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
        idSupplier: {
            type: DataTypes.UUID,
            allowNull: false
        },
        orderDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        shippingAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    UserAndOrder.associate = function(models) {
        UserAndOrder.belongsTo(models.Food, {foreignKey: 'idFood'});
        UserAndOrder.belongsTo(models.User, {foreignKey: 'idUser'});
        UserAndOrder.belongsTo(models.Supplier, {foreignKey: 'idSupplier'});
    };

    return UserAndOrder;
};
