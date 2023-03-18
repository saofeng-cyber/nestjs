import { PartialType } from '@nestjs/mapped-types';
import { CreateLoginDto } from './create-login.dto';

export class UpdateLoginDto extends PartialType(CreateLoginDto) {
  id: number;
  constructor(id: number, email: string, password: string, username: string) {
    super();
    this.id = id;
    this.password = password;
    this.username = username;
  }
}
