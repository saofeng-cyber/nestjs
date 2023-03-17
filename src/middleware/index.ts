import { Request, Response, NextFunction } from 'express';
export const middleware = (req: Request, res: Response, next: NextFunction) => {
  //   res.send('全局拦截已生效');
  console.log('全局拦截已生效');
  next();
};
