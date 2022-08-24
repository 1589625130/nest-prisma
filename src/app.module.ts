import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { ArticleModule } from './article/article.module';
import config from './config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [...config] }), CategoryModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
