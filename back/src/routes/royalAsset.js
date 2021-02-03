const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.royalAsset.findMany();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { label, description, imageUrl } = req.body;
    const results = await prisma.royalAsset.create({
      data: {
        label,
        description,
        imageUrl,
      },
    });
    res.status(201).json(results);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { label, description, imageUrl } = req.body;
    const results = await prisma.royalAsset.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        label,
        description,
        imageUrl,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.delete('./:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.royalAsset.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
