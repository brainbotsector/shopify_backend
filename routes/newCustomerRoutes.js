const express = require('express');
const Router = express.Router();
const {
  getNewCustomersDaily,
  getNewCustomersMonthly,
  getNewCustomersQuarterly,
  getNewCustomersYearly,
} = require('../controllers/newCustomerController');

Router.get('/daily', async (req, res) => {
  try {
    const newCustomersDaily = await getNewCustomersDaily();
    res.json(newCustomersDaily);
  } catch (error) {
    console.error('Error fetching daily new customers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

Router.get('/monthly', async (req, res) => {
  try {
    const newCustomersMonthly = await getNewCustomersMonthly();
    res.json(newCustomersMonthly);
  } catch (error) {
    console.error('Error fetching monthly new customers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

Router.get('/quarterly', async (req, res) => {
  try {
    const newCustomersQuarterly = await getNewCustomersQuarterly();
    res.json(newCustomersQuarterly);
  } catch (error) {
    console.error('Error fetching quarterly new customers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

Router.get('/yearly', async (req, res) => {
  try {
    const newCustomersYearly = await getNewCustomersYearly();
    res.json(newCustomersYearly);
  } catch (error) {
    console.error('Error fetching yearly new customers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = Router;
