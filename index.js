import express from "express";
import mongoose from "mongoose";
import personRouter from "./routers/personRouter.js";
import authRouter from "./routers/authRouter.js";
import fileupload from "express-fileupload";
import cors from "cors";
import { PORT } from "./utils/config.js";

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(cors());
app.use(fileupload({}));
app.use("/", personRouter);
app.use("/auth", authRouter);


const un = "DimasUser";
const pw = "user";
const url = `mongodb+srv://${un}:${pw}@cluster0.ht50v.mongodb.net/myFirstDatabase`;

async function start() {
	try {
		await mongoose.connect(url, {
			useNewUrlParser: true,
		});
		app.listen(PORT, () =>
			console.log(`Server has started on ${PORT} port... `)
		);
	} catch (err) {
		console.log(err);
	}
}
start();
