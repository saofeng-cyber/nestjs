// import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRouterDto {
  name: string;
  path: string;
  redirect: string;
  component: string;
  enum: string;
}
