module.exports = (sequelize, DataTypes) => {

  // Work Order
  const WorkOrder = sequelize.define(
    "Work_Order_Data",
    {
      job_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        initialAutoIncrement: 1,
      },
      job_property_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      job_contact_first_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      job_contact_last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      job_email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      job_contact_phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      job_interval: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      job_day_priority: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Monday",
      },
      job_address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      job_city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      job_state: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      job_postal_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      job_notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      job_count: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: true,
      },
      job_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      job_distance_from_homebase: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: true,
      },
      job_crew_id_assigned: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      job_time_start: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      job_time_stop: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      job_status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      job_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      service_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    },
    {
      timestamps: true,
      paranoid: true,
    },
  );
  return WorkOrder;
};
