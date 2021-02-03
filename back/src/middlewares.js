function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`-- Not Found -- ${req.originalUrl}`);
  next(error);
}

function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.send({
    message: err.message,
    stack:
      process.env.NODE_ENV === "Production"
        ? "App in production, section is empty"
        : err.stack,
  });
  res.sendStatus(500);
}

module.exports = {
  notFound,
  errorHandler,
};
