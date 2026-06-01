export const authorizeUser = (req, res, next) => {
  const user = global.user;
  if (!user) {
    next({
      status: 401,
      message: "User not logged in",
    });
  }
  next();
};

export const authenticateKey = async (req, res, next) => {
  const key = req.headers["x-api-key"];

  if (!key) {
    next({
      status: 401,
      message: "No API key provided",
    });
  }

  const result = await keyExists(key);

  if (!result.success) {
    next({
      status: 401,
      message: result.message,
    });
  }
  next();
};
