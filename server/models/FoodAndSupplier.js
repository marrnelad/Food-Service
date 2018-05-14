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
        }
    });

    return FoodAndSupplier;
};