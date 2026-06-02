import Order from "../models/order.model.js";

export const getOrders = async () => {
  try {
    const result = await Order.find();

    return {
      success: true,
      orders: result,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getOrdersById = async (userId) => {
  try {
    const result = await Order.find({ userId });

    return {
      success: true,
      order: result,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const userIdExists = async (userId) => {
  try {
    const result = await Order.exists({ userId });
    if (result) {
      return { success: true };
    } else throw new Error("No orders connected to given userId");
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
