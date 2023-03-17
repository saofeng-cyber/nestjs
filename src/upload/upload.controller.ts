import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { join } from 'path';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    console.log('上传文件', file);
    return '骚风今年25岁，憋不住了';
  }
  @Get('download')
  downLoad(@Res() res: Response) {
    const file_path = join(__dirname, '../assets/001935-1615911575642b.jpg');
    res.download(`${file_path}`);
  }

  @Post()
  create(@Body() createUploadDto: CreateUploadDto) {
    return this.uploadService.create(createUploadDto);
  }

  @Get()
  findAll() {
    return this.uploadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
    return this.uploadService.update(+id, updateUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadService.remove(+id);
  }
}
