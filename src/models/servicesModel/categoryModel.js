module.exports = (sequelize, DataTypes) => {

  // Category_Data
  const Category = sequelize.define("Category_Data", {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1,
  },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_season: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_image: {
      type: DataTypes.STRING,
      allowNull: true
    },
  })
return Category 
}
