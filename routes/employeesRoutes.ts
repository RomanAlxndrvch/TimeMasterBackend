import express from "express";
import {getAllEmployees} from "../controllers/employeesController";


export const employeesRoutes = express.Router()

employeesRoutes.route('/').get(getAllEmployees)

