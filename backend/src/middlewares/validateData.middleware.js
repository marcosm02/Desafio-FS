const validateDataMiddleware = (schema) => async (req, res, next) => {
  try {
    const validate = await schema.validate(req.body, {
      stripUnknown: true,
      abortEarly: false,
    });
    req.body = validate;
    return next();
  } catch (error) {
    return res.status(400).json({ error: error.errors });
  }
};

module.exports = validateDataMiddleware;
