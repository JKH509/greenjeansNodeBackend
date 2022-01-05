module.exports = (sequelize, DataTypes) => {

  // Services_Data
  const Service = sequelize.define("Service_Data", {
    service_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1,
  },
    service_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    service_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    service_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    service_warranty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    warranty_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    service_season_spring: {
      type: DataTypes.STRING,
      allowNull: true
    },
    service_season_summer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    service_season_fall: {
      type: DataTypes.STRING,
      allowNull: true
    },
    service_season_winter: {
      type: DataTypes.STRING,
      allowNull: true
    },
    service_image: {
      type: DataTypes.STRING,
      allowNull: true
    },
  })
return Service 
}
