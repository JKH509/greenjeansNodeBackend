module.exports = (sequelize, DataTypes) => {
  // Invoice_Data
  const Invoice = sequelize.define("Invoice_Data", {
    invoice_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    quanity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sub_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    taxes: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 9.01
    },
    discounts: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
      paranoid: true,
  }
  );
  return Invoice;
};
