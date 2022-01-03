module.exports = (sequelize, DataTypes) => {

  // Services_Data
  const Service = sequelize.define("Service_Data", {
    ServiceType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ServiceDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ServicePrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ServiceWarranty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    WarrantyDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ServiceSeason: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ServiceImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
  })
return Service 
}
