var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    default: "",
    required: true,
  },
  company: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
    required: true,
  },
  images: [
    {
      image1: {
        type: String,
      },
      image2: {
        type: String,
      },
      image3: {
        type: String,
      },
      image4: {
        type: String,
      },
    },
  ],
  description: {
    type: String,
  },

  featured: {
    type: Boolean,
    required: true,
  },
  featuredProducts: {
    type: Boolean,
    required: true,
  },
  amount: {
    type: Number,
  },
});

var user = new mongoose.model("Product", schema);

module.exports = user;
