import {Request, Response} from "express";
import {Employees} from "../models/employeesModel";


export const getAllEmployees = async (req: Request, res: Response) => {

    try {
        const allEmployees = await Employees.find()
        res.status(200).json({
            status: "success",
            data: {
                allEmployees
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "success",
            data: {
                data: err
            }
        });
    }
}