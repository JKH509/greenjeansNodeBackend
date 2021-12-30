const db = require('../../dbConfig');

const employeeController = (req, res) => {

  
const getAll = (req, res) => {
  const sqlGetservices = "SELECT * FROM Employee_Data";
  db.query(sqlGetservices, (err, result) => {
    res.send(result);
  });
};

async function getEmployeeById(req, res) {
  try {
    let employeeId = req.params.id;
    let sql = "SELECT * FROM `Employee_Data` WHERE `id`= ?";
    db.query(sql, [employeeId], function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(404).json(error);
  }
}


// async function getEmployeeById(req, res) {
//   try {
//     let sql = "SELECT * FROM `Employee_Data` WHERE `id`= ?";
//     let employeeId = req.params.id;

//     db.query(sql, [employeeId], function (err, result) {
//       if (err) throw err;
//       res.status(200).json(result);
//     });
//   } catch (error) {
//     res.status(404).json(error);
//   }
// }

// app.get("/updateemployee/:id", (req, res) => {
  // let updateEmployee = "SELECT * FROM `Employee_Data` WHERE `id`= ?";
  // let newName = "Updated name";
  
  // let sql = "UPDATE `Employee_Data` SET `first_name` = '${newName}' WHERE id = ${req.params.id}";

  // let query = db.query(sql, (err) => {

  //   if (err) {

  //     throw err;

  //   }

  //   res.send("Post updated...");

  // });

  // async function editEmployeeById(req, res) {
  //   try {
  //     let sql = "SELECT * FROM `Employee_Data` WHERE `id`= ?";
  //     let employeeId = req.params.id;
  
  //     db.query(sql, [employeeId], function (err, result) {
  //       if (err) throw err;
  //       res.status(200).json(result);
  //     });
  //   } catch (error) {
  //     res.status(404).json(error);
  //   }
  // }

// });

// addUpdateEmployee = (req, res) => {
//   (async () => {
//     const request = new sql.Request();
//     await request
//       .input("first_name", sql.Int, req.body.employeeFirstName)
//       .input("last_name", sql.Int, req.body.employeeLastName)
//       .input("address", sql.Int, req.body.employeeAddress)
//       .input("city", sql.Int, req.body.employeeCity)
//       .input("state", sql.Int, req.body.employeeState)
//       .input("zip", sql.Int, req.body.employeeZip)
//       .input("distance", sql.Int, req.body.employeeDistance)
//       .input("cautions", sql.Int, req.body.employeeCautions)
//       .input("address", sql.Int, req.body.orderCartId)
//       .query(
//         "UPDATE [dbo].[OrderItem] SET Qty =@qty WHERE ProductID=@productId and OrderCartID=@orderCartId",
//         (err, results) => {
//           if (err) {
//             // return res.sendStatus(400)
//             return res.status(412).json(err);
//           } else {
//             return res.sendStatus(204);
//             // return res.status(200).json(requests);
//           }
//         }
//       );
//     // res.status(200).json(cart);
//   })();
// };
// .query(`UPDATE dbo.OrderItem SET Qty WHERE ${OrderItemID}=@orderItemId`);

// putUpdateEmployee = (req, res) => {
//   (async () => {
//     const request = new sql.Request();
//     await request
//       .input("orderItemId", sql.Int, req.body.orderItemId)
//       .input("qtyInput", sql.Int, req.body.qty)
//       .query("UPDATE [dbo].[OrderItem] (Qty) VALUES(@qty) WHERE OrderItemID=@orderItemId");
//   })();


//   return res.sendStatus(204);
// }





 return {
  getAll,
  getEmployeeById
 };
}

module.exports = employeeController;