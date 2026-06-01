import Menu from "../models/menu.model.js";

export const getMenu = async () => {
	try {
		const result = await Menu.find();

		console.log(result);

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
