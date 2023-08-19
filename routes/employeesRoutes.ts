import express from "express";
import {getAllEmployees} from "../controllers/employeesController";


export const employeesRouter = express.Router()

employeesRouter.route('/').get(getAllEmployees)

