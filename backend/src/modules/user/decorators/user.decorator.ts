import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserPayloadKeys } from 'src/common/types/types';

export const GetUser = createParamDecorator(
  (data: UserPayloadKeys, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user?.[data] : user;
  },
);
