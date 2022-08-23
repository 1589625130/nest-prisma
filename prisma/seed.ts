import { createUser } from './seeds/user';
import { addCategory } from './seeds/category';

async function run() {
  await createUser();
  addCategory();
}

run();
