module.exports = (sequelize, DataTypes) => {
    const Supplier = sequelize.define('Supplier', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
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

    // Food.associate = (models) => {
    //   Food.hasMany(models.UserAndOrder, {
    //     foreignKey: 'todoId',
    //     as: 'todoItems',
    //   });
    // };

    return Supplier;
};