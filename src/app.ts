import express, { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from './interfaces';
import { httpStatus, messages } from './helpers';
import productsRouter from './routes/index.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use((err: ErrorHandler, req: Request, res: Response, _next: NextFunction) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(httpStatus.INTERNAL_ERROR).json({ message: messages.INT_ERROR_MSG });
});

export default app;
