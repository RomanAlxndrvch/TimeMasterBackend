"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const employeesRoutes_1 = require("./routes/employeesRoutes");
dotenv_1.default.config({ path: './config.env' });
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
/*app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    next()
})*/
//! MIDDLEWARE
exports.app.use((0, morgan_1.default)('dev'));
exports.app.use(express_1.default.json());
//! ROUTES ////////////////////////////////////////
exports.app.use('/api/employees', employeesRoutes_1.employeesRouter);
