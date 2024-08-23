const express = require('express');
const Router = express.Router();
const Order = require('../models/orders'); 

const getRepeatCustomers = async (timeframe) => {
  const now = new Date();
  let startDate;

  switch (timeframe) {
    case 'daily':
      startDate = new Date(now.setDate(now.getDate() - 1));
      break;
    case 'monthly':
      startDate = new Date(now.setMonth(now.getMonth() - 1));
      break;
    case 'quarterly':
      startDate = new Date(now.setMonth(now.getMonth() - 3));
      break;
    case 'yearly':
      startDate = new Date(now.setFullYear(now.getFullYear() - 1));
      break;
    default:
      throw new Error('Invalid timeframe');
  }

  try {
    const repeatCustomers = await Order.aggregate([
      { $match: { created_at: { $gte: startDate } } },
      { $group: { _id: "$customer.id", orderCount: { $sum: 1 } } },
      { $match: { orderCount: { $gt: 1 } } }
    ]).exec();

    return repeatCustomers;
  } catch (error) {
    console.error('Error fetching repeat customers:', error);
    throw error;
  }
};

Router.get('/:timeframe', async (req, res) => {
    const { timeframe } = req.params;
    try {
      const repeatCustomers = await getRepeatCustomers(timeframe);
      res.json(repeatCustomers);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = Router;
