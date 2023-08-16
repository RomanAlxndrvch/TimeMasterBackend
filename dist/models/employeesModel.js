"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const employeesSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Each employee must have a name'],
        unique: true
    },
    password: {
        type: Number,
        required: [true, 'Each employee must have a login password'],
    },
    totalAmountHoursPerMonth: { type: Number, required: true, default: 0 },
    hoursPerDay: { type: Number, required: true, default: 0 },
    workingDays: { type: [Date], required: true }
});
const Employees = (0, mongoose_1.model)('Employees', employeesSchema);
