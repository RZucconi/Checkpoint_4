const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.royalAssetReservation.findMany();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { royalAssetId, reservationId } = req.body;
    const results = await prisma.royalAssetReservation.create({
      data: {
        royalAsset: {
          connect: { id: parseInt(royalAssetId, 10) },
        },
        reservation: {
          connect: { id: parseInt(reservationId, 10) },
        },
      },
    });
    res.status(201).json(results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
