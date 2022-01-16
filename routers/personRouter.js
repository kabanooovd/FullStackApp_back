import Router from "express";
import PersonController from "../controllers/PersonController.js";
const personRouter = new Router();

personRouter.get("/person", PersonController.getAll);
personRouter.get("/person/:id", PersonController.getOne);
personRouter.get("/currentperson/:userName", PersonController.getProfileByUsername);
personRouter.put("/person", PersonController.update);
personRouter.delete("/person/:id", PersonController.remove);

export default personRouter;
