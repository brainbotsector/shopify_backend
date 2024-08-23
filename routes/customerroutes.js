const express = require('express');
const Router = express.Router();
const customerModel = require("../models/customer"); 

// Endpoint to get all customers
Router.get("/", async (req, res) => {
  try {
    console.log("Fetching all customers...");
    const data = await customerModel.find();
    res.json(data);
  } catch (err) {
    console.error("Error fetching customers:", err);
    res.status(500).send(err);
  }
});

// In your Express Router file
Router.get("/new-customers-over-time", async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    // Validate and parse date range from query parameters
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
      return res.status(400).json({ error: "Invalid date range" });
    }

    // Aggregation pipeline to count new customers added per day
    const pipeline = [
      {
        $match: {
          created_at: {
            $gte: start,
            $lt: end
          }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: "$created_at" },
            month: { $month: "$created_at" },
            day: { $dayOfMonth: "$created_at" }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { "_id": 1 }
      }
    ];

    const result = await customerModel.aggregate(pipeline);

    res.json(result);
  } catch (err) {
    console.error("Error fetching new customers over time:", err);
    res.status(500).send(err);
  }
});

Router.get('/geo-distribution', async (req, res) => {
  try {

    const pipeline = [
      {
        $group: {
          _id: "$default_address.city", 
          count: { $sum: 1 } 
        }
      },
      {
        $sort: { count: -1 } 
      }
    ];

    const result = await customerModel.aggregate(pipeline).exec();
    res.json(result);
  } catch (err) {
    console.error("Error fetching geographical distribution data:", err);
    res.status(500).send(err);
  }
});

module.exports = Router;
