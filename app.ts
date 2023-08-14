import express, {Express} from 'express';
import morgan from 'morgan';
import dotenv from "dotenv";

dotenv.config({path: './config.env'});

//! Types for request mw
declare module 'express-serve-static-core' {
    interface Request {
        requestTime?: string;
    }
}


export const app: Express = express();
console.log(process.env.NODE_ENV);

//! MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

//! ROUTES ////////////////////////////////////////

