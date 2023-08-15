import mongoose, {ConnectOptions} from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: "./config.env"});

import {app} from "./app";

const DB = process.env.DATABASE?.replace(
    "<PASSWORD>",
    process.env.DATABASEPASSWORD || "570572203"
);
console.log(process.env.DATABASEPASSWORD)

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

mongoose.connect(DB as string, {}).then(() => {
    console.log("DB connection ");
}).catch(() => {
    console.log("SOMETHING WRONG WITH DB");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});