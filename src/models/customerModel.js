const mysql = require('mysql')

const {Schema} = mysql;

const customerModel = new Schema(
  {
    //     [ProductID] [int] IDENTITY(1,1) NOT NULL,
    ProductID:{type:mssql.Int},
    CategoryID:{type:mssql.Int}, // NOT NULL,
    Name:{type:mssql.NVarChar (100)}, //NOT NULL,
    Description:{type:nvarchar (4000)}, // NULL,
    Price:{type:mssql.Money}, //NOT NULL,
    PriceDescription:{type:nvarchar (50)},//[nvarchar](50) //NULL,
    SortOrder:{type:mssql.SmallInt}, //NULL,
    Active:{type:mssql.Bit}, //NOT NULL,
    Ounces:{type:mssql.Decimal (18, 4)},//(18, 4) //NOT NULL,
    ImagePath:{type:mssql.VarChar (500)},// NULL,
    HandlingCost:{type:mssql.Money}, //NOT NULL,
    TaxExempt:{type:mssql.Bit}, //NOT NULL,
    SKU:{type:mssql.NVarChar (100)},//(100)// NULL
  
  // read: {type:Boolean, default: false }
  }
);

module.exports =mysql.model('customers', customerModel);