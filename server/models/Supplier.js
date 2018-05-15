export default (sequelize, DataTypes) => {
    const Supplier = sequelize.define('Supplier', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
        }
    });

    Supplier.associate = function(models) {
        Supplier.hasMany(models.FoodAndSupplier, {foreignKey: 'idSupplier', onDelete: 'CASCADE'});
    };

    return Supplier;
};