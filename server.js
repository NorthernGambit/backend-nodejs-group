import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { logger } from "./middlewares/logger.middleware.js";
import menuRouter from "./routes/menu.route.js";
import cartRouter from "./routes/cart.route.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8081;
mongoose.connect(process.env.CONNECTION_STRING);
const database = mongoose.connection;

app.use(express.json());

app.use(logger);

app.use("/api/menu", menuRouter);
app.use("/api/cart", cartRouter);

database.on("error", (error) => console.log(error));
database.once("connected", () => {
	console.log("Database connected");
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
});

app.use(errorHandler);
