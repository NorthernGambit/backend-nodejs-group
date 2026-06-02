import Cart from "../models/cart.model.js";

export const getCarts = async () => {
	try {
		const result = await Cart.find();

		return {
			success: true,
			carts: result,
		};
	} catch (error) {
		return {
			success: false,
			message: error.message,
		};
	}
};

export const getCartById = async (id) => {
	try {
		const result = await Cart.find({ userId: id });

		return {
			success: true,
			cart: result,
		};
	} catch (error) {
		return {
			success: false,
			message: error.message,
		};
	}
};
