const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.reservation.findMany();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/register-visitors', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.visitor.findMany({
      where: {
        reservationId: parseInt(id, 10),
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { date } = req.body;
    const results = await prisma.reservation.create({
      data: {
        date,
      },
    });
    res.status(201).json(results);
    console.log(res);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { date } = req.body;
    const results = await prisma.reservation.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        date,
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
    await prisma.reservation.delete({
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
