module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("User_Login_Data", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Users;
};