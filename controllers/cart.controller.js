import * as cartService from "../services/cart.service.js";

export const getCarts = async (req, res, next) => {
	const result = await cartService.getCarts();

	if (!result.success) {
		return next({
			status: 500,
			message: `Database failed to retrieve all carts, error: ${result.message}`,
		});
	}

	res.json({
		success: true,
		message: "All carts succesfully retrieved",
		carts: result.carts,
	});
};

export const patchCart = async (req, res, next) => {
	const body = req.body;
	const user = global.user;

	if (user) {
		//check if cart exists already else create a new one
	} else if (!user) {
	}
};
