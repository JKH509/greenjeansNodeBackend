const db = require('../models')
// Image upload
const multer = require('multer')
const path = require('path')

// Create main model 
const Category = db.Category_Data

// Create
const addCategory = async (req, res) => {
  try {
    let info = {
      category_name: req.body.category_name,
      category_description: req.body.category_description,
      category_season: req.body.category_season,
      category_image: req.file.path
    }
    // files is for more than 1 image
    // category_image: req.files.path
    const category = await Category.create(info)
    res.status(200).send(category)
    console.log(category)
  } 
  catch (e) {
    console.log(e);
  }
};

// Get All Categories
const getAllCategories = async (req, res) => {
  let categories = await Category.findAll({})
  res.status(200).send(categories)
}

// Get Categories By ID
const getCategoryById = async (req, res) => {
  let category_id = req.params.category_id
  let category = await Category.findOne({
    where: {
      category_id: category_id
    }
  })
  res.status(200).send(category)
}

// UPDATE Category By ID
const updateCategory = async (req, res) => {
  let id = req.params.category_id;
  const category = await Category.update(req.body, {
    where: {
      category_id: id,
    },
  });
  res.status(200).send(category);
};

// DELETE Category By ID
const deleteCategory = async (req, res) => {
  let id = req.params.category_id
  await Category.destroy({where: {category_id: id}})
  res.status(200).send('Category is deleted')
}

// Photo uploads
// where you are going to store the image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './uploads/categories')
  },
  // What you will call the image
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/
      const mimeType = fileTypes.test(file.mimetype)  
      const extname = fileTypes.test(path.extname(file.originalname))
      if(mimeType && extname) {
          return cb(null, true)
      }
      cb('Give proper files formate to upload')
  }
}).single('category_image')


module.exports = {
  addCategory, 
  upload,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
}
