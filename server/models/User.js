export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
    },
    address: {
          type: DataTypes.STRING,
      },
  });

  User.associate = function(models) {
      User.hasMany(models.UserAndOrder, {foreignKey: 'idUser', onDelete: 'CASCADE'});
  };

  return User;
};
