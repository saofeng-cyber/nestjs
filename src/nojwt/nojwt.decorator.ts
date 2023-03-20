import { SetMetadata } from '@nestjs/common';
/**配置装饰器，控制是否需要鉴权 */
export const Nojwt = (hasjwt: boolean) => SetMetadata('nojwt', hasjwt);
