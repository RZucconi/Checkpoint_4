const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.socialLink.findMany();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { label, url, royalFamilyId } = req.body;
    const results = await prisma.socialLink.create({
      data: {
        label,
        url,
        royalFamily: {
          connect: { id: parseInt(royalFamilyId, 10) },
        },
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
    const { label, url, royalFamilyId } = req.body;
    const results = await prisma.socialLink.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        label,
        url,
        royalFamily: {
          connect: { id: parseInt(royalFamilyId, 10) },
        },
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
    const results = await prisma.socialLink.delete({
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
