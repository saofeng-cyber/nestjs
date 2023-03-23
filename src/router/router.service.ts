import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRouterDto } from './dto/create-router.dto';
import { UpdateRouterDto } from './dto/update-router.dto';
import { Router } from './entities/router.entity';

@Injectable()
export class RouterService {
  constructor(@InjectRepository(Router) private readonly router: Repository<Router>) {}
  create(createRouterDto: CreateRouterDto) {
    const router = new CreateRouterDto();
    router.name = createRouterDto.name;
    router.path = createRouterDto.path;
    router.redirect = createRouterDto.redirect;
    router.component = createRouterDto.component;
    router.enum = createRouterDto.enum;
    return this.router.save(router);
  }

  findAll() {
    return this.router.find();
  }

  findOne(routeId: number) {
    return this.router.findOne({
      where: {
        routeId,
      },
    });
  }

  update(id: number, updateRouterDto: UpdateRouterDto) {
    return updateRouterDto;
  }

  remove(id: number) {
    return `This action removes a #${id} router`;
  }
}
