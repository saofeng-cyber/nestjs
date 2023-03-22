import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { AuthService } from '@/auth/auth.service';
import { LocalAuthGuard } from '@/auth/guards/local.guard';
import { Nojwt } from '@/nojwt/nojwt.decorator';
// import { JwtAuthGuard } from '@/auth/guards/jwt.guard';

@Nojwt(true)
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService, private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async create(@Body() createLoginDto: CreateLoginDto) {
    const { access_token } = await this.authService.login(createLoginDto.username, createLoginDto.password);
    createLoginDto.token = access_token;
    return this.loginService.create(createLoginDto);
  }

  // @UseGuards(JwtAuthGuard)
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
