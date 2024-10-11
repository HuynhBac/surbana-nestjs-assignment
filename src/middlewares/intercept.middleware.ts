/*
https://docs.nestjs.com/middleware#middleware
*/

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { logger } from 'src/utils/logger';

@Injectable()
export class InterceptMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    try {
      console.log('Request...');
      const { method, originalUrl ,query, params, body } = req;
      logger.log(`'${originalUrl}' - ${method} Called - Data recieved :`);
      logger.log('API query: ', JSON.stringify(query, null, 2));
      logger.log('API params: ', JSON.stringify(params, null, 2));
      logger.log('API body: ', JSON.stringify(body, null, 2));
      next();
      return;
    } catch (error) {
      logger.error('Intercept error: ', JSON.stringify(error));
      logger.error('Error status:', error.status || '');
      return next(error);
    }
  }
}
