const ShopifyCustomer = require('../models/customer'); 
const getNewCustomersDaily = async () => {
  try {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    
    const end = new Date(start);
    end.setDate(start.getDate() + 1);

    console.log('Fetching daily customers between', start, 'and', end);

    return await ShopifyCustomer.find({
      created_at: { $gte: start, $lt: end }
    });
  } catch (error) {
    console.error('Error fetching daily new customers:', error);
    throw error;
  }
};

const getNewCustomersMonthly = async () => {
  try {
    const start = new Date();
    start.setDate(1);
    start.setHours(0, 0, 0, 0);
    
    const end = new Date(start);
    end.setMonth(start.getMonth() + 1);
    end.setMilliseconds(end.getMilliseconds() - 1);

    console.log('Fetching monthly customers between', start, 'and', end);

    return await ShopifyCustomer.find({
      created_at: { $gte: start, $lte: end }
    });
  } catch (error) {
    console.error('Error fetching monthly new customers:', error);
    throw error;
  }
};

const getNewCustomersQuarterly = async () => {
  try {
    const start = new Date();
    const quarter = Math.floor(start.getMonth() / 3);
    start.setMonth(quarter * 3, 1);
    start.setHours(0, 0, 0, 0);

    const end = new Date(start);
    end.setMonth(start.getMonth() + 3);
    end.setMilliseconds(end.getMilliseconds() - 1);

    console.log('Fetching quarterly customers between', start, 'and', end);

    return await ShopifyCustomer.find({
      created_at: { $gte: start, $lte: end }
    });
  } catch (error) {
    console.error('Error fetching quarterly new customers:', error);
    throw error;
  }
};

const getNewCustomersYearly = async () => {
  try {
    const start = new Date();
    start.setMonth(0, 1);
    start.setHours(0, 0, 0, 0);
    
    const end = new Date(start);
    end.setFullYear(start.getFullYear() + 1);
    end.setMilliseconds(end.getMilliseconds() - 1);

    console.log('Fetching yearly customers between', start, 'and', end);

    return await ShopifyCustomer.find({
      created_at: { $gte: start, $lte: end }
    });
  } catch (error) {
    console.error('Error fetching yearly new customers:', error);
    throw error;
  }
};

module.exports = {
  getNewCustomersDaily,
  getNewCustomersMonthly,
  getNewCustomersQuarterly,
  getNewCustomersYearly,
};
