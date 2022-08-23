import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
import { create } from '../helper';

const prisma = new PrismaClient();

export async function createUser() {
  create(300, async (prisma: PrismaClient) => {
    await prisma.user.create({
      data: {
        email: Random.email(),
        github: Random.url(),
        password: Random.string(),
        avatar: Random.image('300*300'),
      },
    });
  });
}
