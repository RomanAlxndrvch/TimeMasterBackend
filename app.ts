import express, { Express } from 'express';
import morgan from 'morgan';
import { tourRouter } from './routes/tourRoutes';
import { userRouter } from './routes/userRoutes';

//! Types for request mw
declare module 'express-serve-static-core' {
  interface Request {
    requestTime?: string;
  }
}

export const app: Express = express();
console.log(process.env.NODE_ENV);

//! MIDDLEWARE
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

//! ROUTES ////////////////////////////////////////

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
