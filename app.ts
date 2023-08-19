import express, {Express} from 'express';
import morgan from 'morgan';
import dotenv from "dotenv";
import {employeesRouter} from './routes/employeesRoutes';


dotenv.config({path: './config.env'});

//! Types for request mw
declare module 'express-serve-static-core' {
    interface Request {
        requestTime?: string;
    }
}


export const app: Express = express();

//! MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

//! ROUTES ////////////////////////////////////////
app.use('/api/employees', employeesRouter)

