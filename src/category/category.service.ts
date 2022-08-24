import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CategoryService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: createCategoryDto,
    });
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return this.prisma.category.findFirst({ where: { id } });
  }

  update(id: number, UpdateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: {
        id: +id,
      },
      data: UpdateCategoryDto,
    });
  }

  remove(id: number) {
    return this.prisma.category.deleteMany({ where: { id: id } });
  }
}
