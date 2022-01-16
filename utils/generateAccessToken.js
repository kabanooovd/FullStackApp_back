import jwt from "jsonwebtoken";
import { SECRET_KEY } from "./config.js";

export const generateAccessToken = (id, userName, role) => {
	const payload = { id, userName, role };
	return jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
};
