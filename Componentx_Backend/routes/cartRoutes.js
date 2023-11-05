const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/auth');
const CartController = require('../controllers/cartController');

router.get('/cart', authenticateUser, CartController.viewCart);
router.post('/cart/add', authenticateUser, CartController.addToCart);
router.delete('/cart/remove/:productId', authenticateUser, CartController.removeFromCart);

module.exports = router;
