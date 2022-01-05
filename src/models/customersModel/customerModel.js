module.exports = (sequelize, DataTypes) => {

  const Customer = sequelize.define("Customer_Data", {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1,
  },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile_phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    preferred_priority: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_two: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    street_billing_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    street_billing_address_two: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    billing_city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    billing_state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    billing_postal_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    distance_fo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    property_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    preferred_payment_method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  })

  return Customer
}