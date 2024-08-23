const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  email: { type: String },
  closed_at: { type: Date },
  created_at: { type: Date },
  updated_at: { type: Date },
  number: { type: Number },
  note: { type: String },
  token: { type: String },
  gateway: { type: String },
  test: { type: Boolean },
  total_price: { type: String },
  subtotal_price: { type: String },
  total_weight: { type: Number },
  total_tax: { type: String },
  taxes_included: { type: Boolean },
  currency: { type: String },
  financial_status: { type: String },
  confirmed: { type: Boolean },
  total_discounts: { type: String },
  buyer_accepts_marketing: { type: Boolean },
  name: { type: String },
  referring_site: { type: String },
  landing_site: { type: String },
  cancelled_at: { type: Date },
  cancel_reason: { type: String },
  reference: { type: String },
  user_id: { type: mongoose.Schema.Types.Mixed },
  location_id: { type: mongoose.Schema.Types.Mixed },
  source_identifier: { type: String },
  source_url: { type: String },
  device_id: { type: String },
  phone: { type: String },
  customer_locale: { type: String },
  app_id: { type: Number },
  browser_ip: { type: String },
  landing_site_ref: { type: String },
  order_number: { type: Number },
  discount_applications: [{ type: mongoose.Schema.Types.Mixed }],
  discount_codes: [{ type: mongoose.Schema.Types.Mixed }],
  note_attributes: [{ type: mongoose.Schema.Types.Mixed }],
  payment_gateway_names: [{ type: String }],
  processing_method: { type: String },
  source_name: { type: String },
  fulfillment_status: { type: String },
  tax_lines: [{ type: mongoose.Schema.Types.Mixed }],
  tags: { type: String },
  contact_email: { type: String },
  order_status_url: { type: String },
  presentment_currency: { type: String },
  total_line_items_price_set: {
    shop_money: {
      amount: { type: String },
      currency_code: { type: String }
    },
    presentment_money: {
      amount: { type: String },
      currency_code: { type: String }
    }
  },
  total_discounts_set: {
    shop_money: {
      amount: { type: String },
      currency_code: { type: String }
    },
    presentment_money: {
      amount: { type: String },
      currency_code: { type: String }
    }
  },
  total_shipping_price_set: {
    shop_money: {
      amount: { type: String },
      currency_code: { type: String }
    },
    presentment_money: {
      amount: { type: String },
      currency_code: { type: String }
    }
  },
  subtotal_price_set: {
    shop_money: {
      amount: { type: String },
      currency_code: { type: String }
    },
    presentment_money: {
      amount: { type: String },
      currency_code: { type: String }
    }
  },
  total_price_set: {
    shop_money: {
      amount: { type: String },
      currency_code: { type: String }
    },
    presentment_money: {
      amount: { type: String },
      currency_code: { type: String }
    }
  },
  total_tax_set: {
    shop_money: {
      amount: { type: String },
      currency_code: { type: String }
    },
    presentment_money: {
      amount: { type: String },
      currency_code: { type: String }
    }
  },
  line_items: [{
    id: { type: Number },
    variant_id: { type: Number },
    title: { type: String },
    quantity: { type: Number },
    sku: { type: String },
    variant_title: { type: String },
    vendor: { type: String },
    fulfillment_service: { type: String },
    product_id: { type: Number },
    requires_shipping: { type: Boolean },
    taxable: { type: Boolean },
    gift_card: { type: Boolean },
    name: { type: String },
    variant_inventory_management: { type: String },
    properties: [{ type: mongoose.Schema.Types.Mixed }],
    product_exists: { type: Boolean },
    fulfillable_quantity: { type: Number },
    grams: { type: Number },
    price: { type: Number },
    total_discount: { type: String },
    fulfillment_status: { type: String },
    price_set: {
      shop_money: {
        amount: { type: Number },
        currency_code: { type: String }
      },
      presentment_money: {
        amount: { type: Number },
        currency_code: { type: String }
      }
    },
    total_discount_set: {
      shop_money: {
        amount: { type: String },
        currency_code: { type: String }
      },
      presentment_money: {
        amount: { type: String },
        currency_code: { type: String }
      }
    },
    discount_allocations: [{ type: mongoose.Schema.Types.Mixed }],
    duties: [{ type: mongoose.Schema.Types.Mixed }],
    admin_graphql_api_id: { type: String }
  }],
  shipping_lines: [{ type: mongoose.Schema.Types.Mixed }],
  billing_address: { type: mongoose.Schema.Types.Mixed },
  shipping_address: { type: mongoose.Schema.Types.Mixed },
  fulfillments: [{ type: mongoose.Schema.Types.Mixed }],
  client_details: { type: mongoose.Schema.Types.Mixed },
  refunds: [{ type: mongoose.Schema.Types.Mixed }],
  customer: {
    id: { type: Number },
    email: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date },
    first_name: { type: String },
    last_name: { type: String },
    orders_count: { type: Number },
    state: { type: String },
    total_spent: { type: String },
    last_order_id: { type: Number },
    note: { type: String },
    verified_email: { type: Boolean },
    multipass_identifier: { type: String },
    tax_exempt: { type: Boolean },
    phone: { type: String },
    tags: { type: String },
    last_order_name: { type: String },
    currency: { type: String },
    marketing_opt_in_level: { type: String },
    tax_exemptions: [{ type: mongoose.Schema.Types.Mixed }],
    admin_graphql_api_id: { type: String },
    default_address: {
      id: { type: Number },
      customer_id: { type: Number },
      first_name: { type: String },
      last_name: { type: String },
      company: { type: String },
      address1: { type: String },
      address2: { type: String },
      city: { type: String },
      province: { type: String },
      country: { type: String },
      zip: { type: String },
      phone: { type: String },
      name: { type: String },
      province_code: { type: String },
      country_code: { type: String },
      country_name: { type: String },
      default: { type: Boolean }
    }
  },
  total_line_items_price: { type: String }
});

module.exports = mongoose.model('Shopifyorders', orderSchema, 'shopifyOrders');
