import { Router } from "express";

import {
  ctrlCreateTask,
  ctrlDeleteTask,
  ctrlListTasks,
} from "../controllers/task-controllers.js";

const taskRouter = Router();

taskRouter.get("/", ctrlListTasks);
taskRouter.post("/", ctrlCreateTask);

taskRouter.delete("/:taskId", ctrlDeleteTask);

export { taskRouter };