import { Nojwt } from '@/nojwt/nojwt.decorator';
import { Controller, Get, Session } from '@nestjs/common';
import * as svgCaptcha from 'svg-captcha';

@Nojwt(true)
@Controller('captcha')
export class CaptchaController {
  @Get()
  getCode(@Session() session) {
    const captcha = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1i',
      noise: 2,
      color: true,
      fontSize: 50,
      width: 100,
      height: 40,
    });
    session.code = captcha.text;
    console.log(session.code);
    return captcha.data;
  }
}
