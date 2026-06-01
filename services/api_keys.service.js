import ApiKey from "../models/api_key.model.js";

export const getApiKeys = async () => {
	try {
		const result = await ApiKey.find();

		return {
			success: true,
			keys: result,
		};
	} catch (error) {
		return {
			success: false,
			message: error.message,
		};
	}
};
