import { keyExists } from "../services/api_keys.service.js";
import { userIdExists } from "../services/orders.service.js";

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

export const authenticateOrders = async (req, res, next) => {
  const { userId } = req.params;

  if (!userId) {
    next({
      status: 401,
      message: "No userId provided",
    });
  }

  const result = await userIdExists(userId);

  if (!result.success) {
    next({
      status: 401,
      message: result.message,
    });
  }
  next();
};
