import express from "express";
import * as todoController from "../controllers/todoController.js";

const router = express.Router();

router.get("/todos", todoController.getTodos);
router.post("/todos", todoController.addTodo);
router.put("/todos/:id", todoController.toggleTodo);
router.delete("/todos/:id", todoController.removeTodo);

export default router;
