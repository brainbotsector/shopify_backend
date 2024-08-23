const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); 

// Import routes
const customerRoutes = require('./routes/customerroutes');
const orderRoutes = require('./routes/ordersRoutes');
const repeatroutes = require('./routes/repeatroutes');
const clvRoutes = require('./routes/clvRoutes');
const newCustomerRoutes = require('./routes/newCustomerRoutes');

// Use routes
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/repeatcustomers', repeatroutes);
app.use('/api/clv', clvRoutes);
app.use('/api/newcustomers', newCustomerRoutes);

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connection successful'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
