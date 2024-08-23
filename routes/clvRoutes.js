const express = require('express');
const router = express.Router();
const Order = require('../models/orders'); 
const Customer = require('../models/customer'); 

router.get('/cohorts', async (req, res) => {
    try {
        
        const sampleOrder = await Order.findOne({});
        const sampleCustomer = await Customer.findOne({});
        if (!sampleOrder || !sampleCustomer) {
            return res.status(404).json({ error: 'No data found' });
        }

        const cohorts = await Order.aggregate([
            
            {
                $lookup: {
                    from: 'customers',
                    localField: 'customer.id',
                    foreignField: '_id',
                    as: 'customer'
                }
            },
           
            { $unwind: { path: '$customer', preserveNullAndEmptyArrays: true } },
          
            {
                $addFields: {
                    cohortMonth: {
                        $dateToString: { format: '%Y-%m', date: { $ifNull: ['$customer.created_at', new Date()] } }
                    }
                }
            },
            // Group by cohort month and calculate total and count
            {
                $group: {
                    _id: '$cohortMonth',
                    totalSpent: { $sum: { $toDouble: { $ifNull: ['$total_price', 0] } } },
                    customerCount: { $sum: 1 }
                }
            },
            // Calculate averageCLV
            {
                $project: {
                    _id: 0,
                    cohortMonth: '$_id',
                    totalSpent: 1,
                    customerCount: 1,
                    averageCLV: {
                        $cond: [
                            { $gt: ['$customerCount', 0] },
                            { $divide: ['$totalSpent', '$customerCount'] },
                            0
                        ]
                    }
                }
            },
            { $sort: { cohortMonth: 1 } }
        ]);
        
        console.log(cohorts);
        
        

        res.json(cohorts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
