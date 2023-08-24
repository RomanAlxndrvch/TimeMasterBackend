"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployeeById = exports.getAllEmployees = void 0;
const employeesModel_1 = require("../models/employeesModel");
const getAllEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allEmployees = yield employeesModel_1.Employees.find();
        res.status(200).json({
            status: "success",
            data: {
                allEmployees
            }
        });
    }
    catch (err) {
        res.status(400).json({
            status: "error",
            data: {
                data: err
            }
        });
    }
});
exports.getAllEmployees = getAllEmployees;
const getEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield employeesModel_1.Employees.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                employee
            }
        });
    }
    catch (err) {
        res.status(400).json({
            status: "error",
            data: {
                data: err
            }
        });
    }
});
exports.getEmployeeById = getEmployeeById;
