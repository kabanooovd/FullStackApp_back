import mongoose from "mongoose";

const Person = new mongoose.Schema({
	name: {
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
	photo: { type: String },
});

export default mongoose.model("Person", Person);