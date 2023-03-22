import { IsNotEmpty, Length } from 'class-validator';

export class CreateLoginDto {
  @IsNotEmpty({
    message: '密码不能为空',
  })
  password: string;
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(5, 10, {
    message: '用户名长度应该在5-10个单位长度 ',
  })
  username: string;
  token: string;
}
