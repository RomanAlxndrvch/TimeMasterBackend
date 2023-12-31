import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: "./config.env"});

import {app} from "./app";

const DB = process.env.DATABASE?.replace(
    "<PASSWORD>",
    process.env.DATABASEPASSWORD || "570572203"
);

mongoose.connect(DB as string, {}).then(() => {
    console.log("DB connected ");
}).catch(() => {
    console.log("SOMETHING WRONG WITH DB");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});