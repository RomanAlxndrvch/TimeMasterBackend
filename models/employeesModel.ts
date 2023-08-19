import {model, Schema} from "mongoose";

interface employeesSchemaType {
    name: string,
    password: number,
    totalAmountHoursPerMonth: number,
    hoursPerDay: number
    workingDays: Array<Date>
}

const employeesSchema = new Schema<employeesSchemaType>({
    name: {
        type: String,
        required: [true, 'Each employee must have a name'],
        unique: true
    },
    password: {
        type: Number,
        required: [true, 'Each employee must have a login password'],
    },
    totalAmountHoursPerMonth: {
        type: Number,
        required: true,
        default: 0
    },
    hoursPerDay: {
        type: Number,
        required: true,
        default: 0
    },
    workingDays: {
        type: [Date],
        required: true
    }
})

export const Employees = model('Employees', employeesSchema)