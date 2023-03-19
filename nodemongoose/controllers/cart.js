const CartModel = require("../models/cart");

// Create and Save a new product
exports.create = async (req, res) => {
  if (!req.body.productId) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  const cart = new CartModel({
    productId: req.body.productId
  });

  await cart.save().then((data) => {
      res.send({
        message: "Item Added Successfully to the cart",
      });
    }).catch((err) => {
      console.log("err",err);
      res.status(500).send({
        message: err.message || "Some error occurred while creating user",
      });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
  try {
    const product = await CartModel.find();
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

  await ProductModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
