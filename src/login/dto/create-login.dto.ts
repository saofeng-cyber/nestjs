import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateLoginDto {
  @IsEmail({}, { message: 'email 不是一个合法邮箱' })
  email: string;
  @IsNotEmpty({
    message: '密码不能为空',
  })
  password: string;
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(5, 10, {
    message: '用户名长度应该在5-10个单位长度 ',
  })
  name: string;
  constructor(email: string, password: string, name: string) {
    this.email = email;
    this.password = password;
    this.name = name;
  }
}
