const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  id: { type: Schema.Types.Mixed, required: true }, 
  email: { type: String, default: "" }, 
  first_name: { type: String }, 
  last_name: { type: String }, 
  created_at: { type: Date, default: Date.now }, 
  updated_at: { type: Date, default: Date.now }, 
  phone: { type: String, default: null }, 
  orders_count: { type: Number, default: 0 }, 
  total_spent: { type: String, default: "0.00" }, 
  tags: { type: String, default: "" },
  verified_email: { type: Boolean, default: false }, 
  marketing_opt_in_level: { type: String, default: null }, 
  addresses: [{
    id: Schema.Types.Mixed,
    customer_id: Schema.Types.Mixed,
    first_name: String,
    last_name: String,
    company: { type: String, default: null },
    address1: String,
    address2: { type: String, default: null },
    city: String,
    province: String,
    country: String,
    zip: String,
    phone: { type: String, default: null },
    name: { type: String, default: "" },
    province_code: { type: String, default: null },
    country_code: { type: String, default: "" },
    country_name: { type: String, default: "" },
    default: Boolean
  }],
  email_marketing_consent: {
    state: String,
    opt_in_level: String,
    consent_updated_at: { type: Date, default: null }
  },
  default_address: {
    id: Schema.Types.Mixed,
    customer_id: Schema.Types.Mixed,
    first_name: String,
    last_name: String,
    company: { type: String, default: null },
    address1: String,
    address2: { type: String, default: null },
    city: String,
    province: String,
    country: String,
    zip: String,
    phone: { type: String, default: null },
    name: { type: String, default: "" },
    province_code: { type: String, default: null },
    country_code: { type: String, default: "" },
    country_name: { type: String, default: "" },
    default: Boolean
  }
}, { collection: "shopifyCustomers" });

module.exports = mongoose.model('ShopifyCustomers', customerSchema);
