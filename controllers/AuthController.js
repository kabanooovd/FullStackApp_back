import User from "../models/User.js";
import bcrypt from "bcryptjs";
import validator from "express-validator";
import { generateAccessToken } from "../utils/generateAccessToken.js";
import fileService from "../utils/fileService.js";
import Person from "../models/Person.js";

class AuthController {
	async registration(req, res) {
		try {
			const { validationResult } = validator;
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json("Validation errors... ");
			}
			const { userName, password } = req.body;
			const candidat = await User.findOne({ userName });
			if (candidat) {
				return res.status(400).json("Such user already exist... ");
			}
			const hashedPw = bcrypt.hashSync(password, 5);
			const user = new User({
				userName,
				password: hashedPw,
			});
			await user.save();
			if (req.files) {
				const person = new Person({
					...req.body,
					photo: fileService.saveFile(req.files.photo),
				});
				await person.save();
			} else {
				const person = new Person({
					...req.body,
				});
				await person.save();
			}
			return res.json("User has been successfully subscribed... ");
		} catch (err) {
			console.log(err);
			res.status(500).join(err);
		}
	}
	async login(req, res) {
		try {
			const { userName, password } = req.body;
			const user = await User.findOne({ userName });
			if (!user) {
				return res.json({ message: `User as ${userName} not found... ` });
			}
			const validPassword = bcrypt.compareSync(password, user.password);
			if (!validPassword) {
				return res.json({ message: `Password is invalid... ` });
			}
			const token = generateAccessToken(user._id, user.userName, user.role);
			return res.json({ token });
		} catch (err) {
			console.log(err);
			res.status(400).json({ message: "Login error... " });
		}
	}
	async removeUser(req, res) {
		try {
			const { id } = req.params;
			const currentUser = await User.findByIdAndDelete(id);
			if (!currentUser) {
				return res.json(`User not found... `);
			}
			return res.json(`User has been removed successfully... `);
		} catch (err) {
			console.log(err);
			res.status(500).join(err);
		}
	}
	async getUsers(req, res) {
		try {
			const users = await User.find();
			return res.json({ users, count: users.length });
		} catch (err) {
			console.log(err);
			res.status(500).join(err);
		}
	}
	async getUserById(req, res) {
		try {
			const { id } = req.params;
			const currentUser = await User.findById(id);
			return res.json({ currentUser });
		} catch (err) {
			console.log(err);
			res.status(500).join(err);
		}
	}
	async getUserData(req, res) {
		try {
			const { userName } = req.params;
			const currentUser = await User.findOne({ userName });
			if (!currentUser) {
				throw new Error(`${userName} doesnt exist anymore... `);
			}
			return res.json({ currentUser });
		} catch (err) {
			console.log(err);
			res.status(500).join(err);
		}
	}
}

export default new AuthController();
