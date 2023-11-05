const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/auth');
const OrderController = require('../controllers/orderController');

router.get('/orders', authenticateUser, OrderController.getOrderHistory);
router.post('/orders/place', authenticateUser, OrderController.placeOrder);

module.exports = router;
