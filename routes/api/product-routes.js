const router = require('express').Router();
const { Product, Category, Tag } = require('../models');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new product
router.post('/', async (req, res) => {
  try {
    const productData = await Product.create(req.body);
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a product by id
router.put('/:id', async (req, res) => {
  try {
    const productData = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a product by id
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
