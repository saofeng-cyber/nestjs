import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { AuthService } from '@/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService, private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    // return this.authService.login(createLoginDto.username, createLoginDto.password);
    return this.loginService.create(createLoginDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Body() query: { username: string; password: string }) {
    return this.loginService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.loginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.loginService.remove(+id);
  }
}
