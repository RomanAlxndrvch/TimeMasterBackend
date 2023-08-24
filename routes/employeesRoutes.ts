import express from "express";
import {getAllEmployees, getEmployeeById} from "../controllers/employeesController";


export const employeesRouter = express.Router()

employeesRouter.route('/').get(getAllEmployees)
employeesRouter.route('/:id').get(getEmployeeById)

