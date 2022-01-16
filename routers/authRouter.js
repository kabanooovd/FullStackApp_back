import Router from "express";
import AuthController from "../controllers/AuthController.js";

const authRouter = new Router();

authRouter.post("/registration", AuthController.registration);
authRouter.post("/login", AuthController.login);
authRouter.get("/userdata/:userName", AuthController.getUserData)

export default authRouter;
