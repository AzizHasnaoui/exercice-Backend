///////////////////////////////ROLE MIDDLEWARE////////////////////////////////////
export const isAdmin = (req, res, next) => {
  if (req.auth.role !== "admin") {
    return res.status(403).json({ error: "No access to this route" });
  }
  next();
};
