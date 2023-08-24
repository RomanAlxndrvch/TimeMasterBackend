"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeesRouter = void 0;
const express_1 = __importDefault(require("express"));
const employeesController_1 = require("../controllers/employeesController");
exports.employeesRouter = express_1.default.Router();
exports.employeesRouter.route('/').get(employeesController_1.getAllEmployees);
exports.employeesRouter.route('/:id').get(employeesController_1.getEmployeeById);
