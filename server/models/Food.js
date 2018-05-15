export default (sequelize, DataTypes) => {
    const Food = sequelize.define('Food', {
        uuid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        available: {
            type: DataTypes.BOOLEAN,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        }
    });
    Food.associate = function(models) {
        Food.hasOne(models.FoodAndSupplier, {foreignKey: 'idFood',onDelete: 'CASCADE'});
        };
    return Food;
};