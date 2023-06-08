const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../models');

// GET all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a tag by id
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a tag by id
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
