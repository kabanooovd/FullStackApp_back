import mongoose from "mongoose";

const Person = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
	},
	profession: {
		type: String,
		required: true,
	},
	age: { type: Number },
	experience: {
		type: String,
	},
	price: {
		type: Number,
		required: true,
	},
	isFree: {
		type: Boolean,
		required: true,
	},
	rating: {
		type: Number,
		required: true,
	},
	status: { type: String, default: "HAVE NO STATUS YET..." },
	photo: { type: String },
});

export default mongoose.model("Person", Person);
