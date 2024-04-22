import { Router } from "express";
import PlusController from "../controllers/PlusController";

const routes = Router();

routes.post("", PlusController.plus);

export default routes;
