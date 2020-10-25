const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    location: {
      coordinates: [Number, Number],
      type: { type: String }
    },
    name: { type: String },
    price: { type: Number },
    reviews: [{ type: Number }]
  },
  { versionKey: false }
);

module.exports = mongoose.model("Restaurant", schema);
