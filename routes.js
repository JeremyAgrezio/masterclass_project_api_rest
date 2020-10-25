const express = require("express");
const Restaurant = require("./models/Restaurant");
const router = express.Router();

router.get("/restaurants/:restaurant_id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.restaurant_id);
    res.send(restaurant);
  } catch {
    res.status(404);
    res.send({ error: "Restaurant doesn't exist!" });
  }
});

router.get("/restaurants", async (req, res) => {
  const long = req.query.long_coordinates;
  const lat = req.query.lat_coordinates;
  const maxDistance = req.query.max_distance || 5000;
  const restaurant = await Restaurant.find({
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [long, lat]
        },
        $maxDistance: maxDistance
      }
    }
  });
  res.send(restaurant);
});

router.get("/restaurants_price_average", async (req, res) => {
    const restaurant = await Restaurant.aggregate([{
      $group: { _id: '', AveragePrice: { $avg: '$price' } }
    }]);
    res.send(restaurant);
});

router.get("/restaurants//average_rating/", async (req, res) => {
  const restaurant = await Restaurant.aggregate([{
    $project: {
      averageRating: { $avg: "$reviews"},
    }
  }]);
  res.send(restaurant);
});

router.post("/restaurants", async (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    location: {
      coordinates: [
        req.body.long_coordinates,
        req.body.lat_coordinates,
      ],
      type: "Point"
    },
  });
  await restaurant.save();
  res.send(restaurant);
});

router.patch("/restaurants/:restaurant_id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ _id: req.params.restaurant_id });

      restaurant.name = req.body.name,
      restaurant.location = {
        coordinates: [
          req.body.long_coordinates,
          req.body.lat_coordinates,
        ],
        type: "Point"
      }

    await restaurant.save();
    res.send(restaurant);
  } catch {
    res.status(404);
    res.send({ error: "Restaurant doesn't exist!" });
  }
});

router.delete("/posts/:restaurant_id", async (req, res) => {
  try {
    await Restaurant.deleteOne({ _id: req.params.restaurant_id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Restaurant doesn't exist!" });
  }
});

module.exports = router;
