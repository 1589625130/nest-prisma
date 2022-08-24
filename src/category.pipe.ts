import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class CategoryPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const obj = plainToInstance(metadata.metatype, value);
    const error = await validate(obj);
    if (error.length) {
      const message = error.map((error) => ({
        name: error.property,
        message: Object.values(error.constraints).map((v) => v),
      }));
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
    return obj;
  }
}
