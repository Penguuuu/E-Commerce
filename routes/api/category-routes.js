const router = require('express').Router();
const { Category, Product } = require('../models');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a category by id
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a category by id
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
