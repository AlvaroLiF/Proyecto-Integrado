const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/auth');
const ProductController = require('../controllers/productController');

router.get('/products', ProductController.getProducts);
router.get('/products/:productId', ProductController.getProductDetails);
router.post('/products', ProductController.createProduct);
router.put('/products/:productId', ProductController.updateProduct);
router.delete('/products/:productId', ProductController.deleteProduct);

module.exports = router;
