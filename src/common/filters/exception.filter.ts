import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Request, Response } from 'express'

import * as Sentry from '@sentry/node'

@Catch(HttpException)
export class ExceptionFilters implements ExceptionFilter {
  public catch(ex: HttpException | any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest<Request>()
    const status = ex.getStatus()
    const messageResponse = ex.getResponse()

    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(ex)
    }

    return response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: process.env.NODE_ENV !== 'production' ? messageResponse.message : ''
    })
  }
}
