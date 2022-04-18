module.exports = (sequelize, DataTypes) => {

  // Frontend Navigation
  const FrontendNav = sequelize.define("Frontent_Nav_Data", {

    itemId:  DataTypes.STRING,
        ownerId:  DataTypes.INTEGER,
        status: DataTypes.STRING,
        type: DataTypes.STRING,
        nature: DataTypes.STRING,
        content: DataTypes.STRING,
        moment: DataTypes.BIGINT
    },
    {
      indexes:[
       {
         unique: false,
         fields:['ownerId']
       }
      ]
    });

    return FrontendNav;
};
  //   nav_id: {
  //     type: DataTypes.INTEGER,
  //     primaryKey: true,
  //     autoIncrement: true,
  //     initialAutoIncrement: 1,
  // },
  //   nav: {
  //     type: DataTypes.STRING,
  //     allowNull: true
  //   },
    

  // })
  // return FrontendNav
  // }
    // service_description: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // service_price: {
    //   type: DataTypes.FLOAT,
    //   allowNull: false
    // },
    // service_warranty: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // warranty_description: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
    // service_path: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
    // service_image: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
//   })
// return FrontendNav
// }
