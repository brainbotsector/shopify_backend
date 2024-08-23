const express = require('express');
const Router = express.Router();
const Order = require('../models/orders'); 

// Get all orders
Router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get order by ID
Router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).send('Order not found');
    res.json(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create a new order
Router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update an order
Router.put('/:id', async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOrder) return res.status(404).send('Order not found');
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete an order
Router.delete('/:id', async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).send('Order not found');
    res.json(deletedOrder);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = Router;
