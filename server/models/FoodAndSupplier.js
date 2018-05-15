export default (sequelize, DataTypes) => {
    const FoodAndSupplier = sequelize.define('FoodAndSupplier', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        idSupplier: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idFood: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    FoodAndSupplier.associate = function(models) {
        FoodAndSupplier.belongsTo(models.Food, {foreignKey: 'idFood'});
    };
    return FoodAndSupplier;
};