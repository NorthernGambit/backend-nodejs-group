import Product from "../models/product.model.js";

export const getMenu = async () => {
	try {
		const result = await Product.find();

		return {
			success: true,
			menu: result,
		};
	} catch (error) {
		return {
			success: false,
			message: error.message,
		};
	}
};
