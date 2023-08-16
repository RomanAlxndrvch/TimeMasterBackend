"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./config.env" });
const app_1 = require("./app");
const DB = (_a = process.env.DATABASE) === null || _a === void 0 ? void 0 : _a.replace("<PASSWORD>", process.env.DATABASEPASSWORD || "570572203");
// mongoose
//     .connect(DB as string, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true
//     } as ConnectOptions)
//     .then(() => {
//         console.log("DB connection ");
//     })
//     .catch(() => {
//         console.log("SOMETHING WRONG WITH DB");
//     });
mongoose_1.default.connect(DB, {}).then(() => {
    console.log("DB connected ");
}).catch(() => {
    console.log("SOMETHING WRONG WITH DB");
});
const port = process.env.PORT || 3000;
app_1.app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
