import mongoose from "mongoose";

const User = new mongoose.Schema({
	userName: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: { type: String, default: "USER" },
});

export default mongoose.model("User", User);
