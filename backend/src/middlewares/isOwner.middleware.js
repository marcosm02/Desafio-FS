const isOwnerMiddleware = async (req, res, next) => {
  const userId = req.user.id;
  const urlId = req.params.id;
  if (userId !== urlId) {
    return res.status(403).json({ message: "Permission denied" });
  }
  return next();
};

module.exports = isOwnerMiddleware;
