import express, {Express} from 'express';
import morgan from 'morgan';
import dotenv from "dotenv";
import cors from "cors";
import {employeesRouter} from './routes/employeesRoutes';


dotenv.config({path: './config.env'});

//! Types for request mw
declare module 'express-serve-static-core' {
    interface Request {
        requestTime?: string;
    }
}


export const app: Express = express();
app.use(cors())
/*app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    next()
})*/


//! MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

//! ROUTES ////////////////////////////////////////
app.use('/api/employees', employeesRouter)

