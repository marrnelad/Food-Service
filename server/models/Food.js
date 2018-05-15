export default (sequelize, DataTypes) => {

  const Food = sequelize.define('Food', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
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
    },
    photo: {
      type: DataTypes.STRING,
    },
  });

  Food.associate = function(models) {
      Food.hasOne(models.FoodAndSupplier, {foreignKey: 'idFood', onDelete: 'CASCADE'});
      Food.hasMany(models.UserAndOrder, {foreignKey: 'idFood', onDelete: 'CASCADE'});
  };

  return Food;
};
