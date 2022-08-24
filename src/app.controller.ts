import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService, ConfigType } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { PrismaClient } from '@prisma/client';

@Controller()
export class AppController {
  prisma: PrismaClient;

  constructor(
    private readonly appService: AppService,
    private readonly config: ConfigService,
    @Inject(databaseConfig.KEY)
    private readonly database: ConfigType<typeof databaseConfig>,
  ) {
    this.prisma = new PrismaClient();
  }

  @Get(':id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.category.findUniqueOrThrow({
      where: {
        id,
      },
    });

    // return this.appService.getHello();
  }

  @Post('add')
  add(@Body() dto: Record<string, any>) {
    return dto;
  }
}
