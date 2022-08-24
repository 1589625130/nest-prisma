import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
import { create } from '../helper';
import { random } from 'lodash';

export async function addArticle() {
  await create(10, async (prisma: PrismaClient) => {
    await prisma.article.create({
      data: {
        title: Random.ctitle(),
        content: Random.cparagraph(10, 50),
        thumb: Random.image('500*500'),
        categoryId: random(1, 10),
      },
    });
  });
}
