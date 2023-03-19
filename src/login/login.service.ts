import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Login } from './entities/login.entity';

@Injectable()
export class LoginService {
  constructor(@InjectRepository(Login) private readonly login: Repository<Login>) {}

  create(createLoginDto: CreateLoginDto) {
    const login = new Login();
    login.username = createLoginDto.username;
    login.password = createLoginDto.password;
    return this.login.save(login);
  }

  findAll(query: { username: string; password: string }) {
    return this.login.find({
      where: {
        username: Like(`%${query.username}%`),
        password: Like(`%${query.password}%`),
      },
    });
  }

  findOne(id: number) {
    return this.login.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return this.login.update(id, updateLoginDto);
  }

  remove(id: number) {
    return this.login.delete(id);
  }
}
