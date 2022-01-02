import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileupload from "express-fileupload";

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileupload({}))
app.use("/", router);

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