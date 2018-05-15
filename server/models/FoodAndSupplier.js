export default (sequelize, DataTypes) => {
    const FoodAndSupplier = sequelize.define('FoodAndSupplier', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        idSupplier: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        idFood: {
            type: DataTypes.UUID,
            allowNull: false,
        }
    });

    FoodAndSupplier.associate = function(models) {
        FoodAndSupplier.belongsTo(models.Food, {foreignKey: 'idFood'});
        FoodAndSupplier.belongsTo(models.Supplier, {foreignKey: 'idSupplier'});
    };

    return FoodAndSupplier;
};
