const Order = require('../models/orders'); 
const getCustomerTransactions = async (customerId) => {
  try {
    
    const transactions = await Order.find({ customerId: customerId }); 
    return transactions;
  } catch (error) {
    console.error('Error fetching customer transactions:', error); 
    throw error;
  }
};

// Function to calculate CLV
const calculateCLV = async (customerId) => {
  try {
    
    const transactions = await getCustomerTransactions(customerId);
    
    
    console.log(`Transactions for customer ID ${customerId}:`, transactions);
    
    
    let totalRevenue = 0;
    transactions.forEach(transaction => {
      totalRevenue += transaction.amount; 
    });

    // Example CLV calculation
    const clv = totalRevenue; 

    return clv;
  } catch (error) {
    console.error('Error in calculateCLV function:', error); 
    throw error;
  }
};

// Controller function to handle CLV data request
const getCLVData = async (req, res) => {
  try {
    const { customerId } = req.query; 
    if (!customerId) {
      return res.status(400).json({ error: 'Customer ID is required' });
    }
    console.log(`Fetching CLV for customer ID: ${customerId}`); 
    
    // Calculate CLV
    const clv = await calculateCLV(customerId);
    
    console.log(`Calculated CLV: ${clv}`); 
    
  
    res.json({ customerId, clv });
  } catch (error) {
    console.error('Error fetching CLV data:', error); 
    res.status(500).json({ error: 'Error fetching CLV data' });
  }
};

module.exports = {
  getCLVData
};
