import * as ordersService from "../services/orders.service.js";

export const getOrders = async (req, res, next) => {
  const result = await ordersService.getOrders();

  if (!result.success) {
    return next({
      status: 500,
      message: `Database failed to retrieve all orders, error: ${result.message}`,
    });
  }

  res.json({
    success: true,
    message: "All orders succesfully retrieved",
    orders: result.orders,
  });
};

export const getOrderById = async (req, res, next) => {
  const { userId } = req.params;
  const result = await ordersService.getOrdersById(userId);

  if (!result.success) {
    return next({
      status: 500,
      message: `Database failed to retrieve orders, error: ${result.message}`,
    });
  }

  res.json({
    success: true,
    message: "Orders succesfully retrieved",
    orders: result.order,
  });
};
