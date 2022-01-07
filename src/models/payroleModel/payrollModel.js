module.exports = (sequelize, DataTypes) => {

  // Services_Data
  const Service = sequelize.define("Service_Data", {
    payroll_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 3,
  },
  // Department you are employed in
    department_employed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // description of department
    department_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // hours workd
    hours_clocked: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // hourly pay
    hourly_pay: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    // pay period the dates eg: 1/15/21 - 1/30/21
    pay_period: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // witheld from check info
    medical_withheld: {
      type: DataTypes.STRING,
      allowNull: true
    },
  })
return Service 
}