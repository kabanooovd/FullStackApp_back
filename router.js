import Router from "express";
import PersonController from "./PersonController.js";
const router = new Router();

router.get("/person", PersonController.getAll);
router.get("/person/:id", PersonController.getOne);
router.post("/person", PersonController.create);
router.put("/person", PersonController.update);
router.delete("/person/:id", PersonController.remove);

export default router;
