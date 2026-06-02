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
    orders: result.orders,
  });
};

export const createOrder = async (req, res, next) => {
  const { cartId } = req.body;

  // Placeholder medans väntar på Leos branch
  const result = await ordersService.getCartById(cartId);

  if (!result.success) {
    return next({
      status: 500,
      message: `Database failed to retrieve cart, error: ${result.message}`,
    });
  }

  const cart = result.cart;

  const order = await ordersService.createOrder({
    userId: cart.userId,
    items: cart.items,
  });

  if (!order.success) {
    return next({
      success: false,
      message: order.message,
    });
  }

  res.status(201).json({
    success: true,
    message: "Order succesfully created",
    ...order,
  });

  // Saknas remove/delete cart funktion här
};
