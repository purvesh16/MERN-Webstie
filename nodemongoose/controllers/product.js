const ProductModel = require("../models/product");

// Create and Save a new product
exports.create = async (req, res) => {
  if (
    !req.body.productId &&
    !req.body.name &&
    !req.body.description &&
    !req.body.price &&
    !req.body.image
  ) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  const product = new ProductModel({
    id: req.body.id,
    name: req.body.name,
    company: req.body.company,
    category: req.body.category,
    price: req.body.price,
    image: req.body.image,
    images: req.body.images,
    image1: req.body.image1,
    image2: req.body.image2,
    image3: req.body.image3,
    image4: req.body.image4,
    description: req.body.description,
    featured: req.body.featured,
    featuredProducts: req.body.featuredProducts,
    amount: req.body.amount,
  });

  await product
    .save()
    .then((data) => {
      res.send({
        message: "Product created successfully!!",
        product: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating user",
      });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
  try {
    const user = await ProductModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a user by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  await ProductModel.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `User not found.`,
        });
      } else {
        res.send({ message: "User updated successfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
  await ProductModel.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `User not found.`,
        });
      } else {
        res.send({
          message: "User deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
