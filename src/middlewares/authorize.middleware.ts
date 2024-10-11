/*
https://docs.nestjs.com/middleware#middleware
*/

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthorizeMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Authorize...');
    next();
  }
}
