const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.royalFamily.findMany();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/social-links', async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await prisma.socialLink.findMany({
      where: {
        royalFamilyId: parseInt(id, 10),
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, description, imageUrl } = req.body;
    const results = await prisma.royalFamily.create({
      data: {
        firstName,
        lastName,
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
    const { firstName, lastName, description, imageUrl } = req.body;
    const results = await prisma.royalFamily.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        firstName,
        lastName,
        description,
        imageUrl,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.royalFamily.delete({
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
