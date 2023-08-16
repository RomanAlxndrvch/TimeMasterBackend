"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './config.env' });
exports.app = (0, express_1.default)();
//! MIDDLEWARE
exports.app.use((0, morgan_1.default)('dev'));
exports.app.use(express_1.default.json());
//! ROUTES ////////////////////////////////////////
