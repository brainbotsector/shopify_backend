# shopify_backend

This project is a RESTful API backend for managing customers and orders in an e-commerce platform. It provides various endpoints to handle customer data, orders, customer lifetime value (CLV) calculations, repeat customer tracking, and other related operations. The API is built using Node.js, Express.js, and MongoDB, with Mongoose for database modeling.

## Key Features

CLV Calculation: An endpoint to calculate Customer Lifetime Value based on historical data.

Repeat Customer Tracking: An endpoint to identify and manage repeat customers.

Geographical Distribution: An endpoint to analyze and retrieve the geographical distribution of customers.

## Project Structure & Flow

Express Server Setup: The API is built on an Express server with the necessary middlewares such as cors for handling cross-origin requests and express.json() for parsing JSON bodies.

Database Connection: The application connects to a MongoDB database using Mongoose. The MongoDB URI is stored in an environment variable for security purposes.

## Model Definitions:

Customer Model (customer.js): Defines the schema for storing customer data, including personal information, addresses, and marketing consent.

Order Model (order.js): Defines the schema for storing order data, including pricing, shipping details, and line items.

## Routes:

Customer Routes (customerroutes.js): Handles all customer-related operations such as retrieving all customers, filtering new customers by time range, and analyzing geographical distribution.

Order Routes (ordersRoutes.js): Handles all order-related operations such as retrieving and processing order data.

Repeat Customer Routes (repeatroutes.js): Manages data related to repeat customers.

CLV Routes (clvRoutes.js): Calculates and retrieves the Customer Lifetime Value based on historical data.

New Customer Routes (newCustomerRoutes.js): Tracks and manages new customers over time.

## Mongoose Schema Aggregations:

New Customers Over Time: Aggregates customer data to count new customers added within a specified date range.

Geographical Distribution: Groups customer data by city to analyze customer distribution.

## Installation

npm install

Run : node server.js

## API Endpoints

GET /api/customers: Retrieve all customers.

GET /api/orders: Retrieve all orders. 

GET /api/customers/new-customers-over-time: Get new customers added within a specified date range.

GET /api/customers/geo-distribution: Get geographical distribution of customers.
