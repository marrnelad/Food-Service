module.exports = (sequelize, DataTypes) => {
    const Food = sequelize.define('Food', {
        id: {
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

    // Food.associate = (models) => {
    //   Food.hasMany(models.UserAndOrder, {
    //     foreignKey: 'todoId',
    //     as: 'todoItems',
    //   });
    // };

    return Food;
};