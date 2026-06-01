import mongoose, { Schema, model } from "mongoose";

const menuSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

const Menu = model("Menu", menuSchema);

export default Menu;
