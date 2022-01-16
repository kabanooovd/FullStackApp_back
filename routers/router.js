import Router from "express";
import PersonController from "../controllers/PersonController.js";
import cors from 'cors'
const router = new Router();

router.get("/person", cors(), PersonController.getAll);
router.get("/person/:id", cors(), PersonController.getOne);
router.post("/person", cors(), PersonController.create);
router.put("/person", cors(), PersonController.update);
router.delete("/person/:id", cors(), PersonController.remove);

export default router;
