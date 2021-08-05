import { createParamDecorator, ExecutionContext } from '@nestjs/common'

/**
 * CurrentUser decorator get the user of the request, you can pass a name to get a property.
 *
 * @example @CurrentUser() currentUser: User
 * @example @CurrentUser('name') name: string
 * @example @CurrentUser('email') email: string
 * @example @CurrentUser('group') group: Group
 *
 * @see https://docs.nestjs.com/custom-decorators#param-decorators
 *
 * @param property Property name of the user
 * @param ctx Context for Request/Response of NestJS
 *
 * @returns User
 */
export const CurrentUser = createParamDecorator((property: string, ctx: ExecutionContext) => {
  const currentUser = ctx.switchToHttp().getRequest()?.user

  return property ? currentUser && currentUser[property] : currentUser
})
