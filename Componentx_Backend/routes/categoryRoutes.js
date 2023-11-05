const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/auth');
const CategoryController = require('../controllers/categoryController');

router.get('/categories', CategoryController.getCategories);
router.get('/categories/:categoryId', CategoryController.getCategoryDetails);
router.post('/categories', CategoryController.createCategory);
router.put('/categories/:categoryId', CategoryController.updateCategory);
router.delete('/categories/:categoryId', CategoryController.deleteCategory);

module.exports = router;
