import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  saltRounds = 10;
  constructor(private readonly jwtService: JwtService) {}
  async validateUser(username: string, password: string): Promise<any> {
    if (username === 'saofeng' && password === 'saofeng666') {
      const salt = await bcrypt.genSalt(this.saltRounds);
      const hash = await bcrypt.hash(password, salt);
      const result = {
        username,
        password: hash,
      };
      return result;
    }
    return null;
  }
  async login(username: string, password: string) {
    const payload = { username, password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
