import { createUser } from './seeds/user';
import { addCategory } from './seeds/category';
import { addArticle } from './seeds/article';

async function run() {
  await createUser();
  await addCategory();
  await addArticle();
}

run().then(() => {
  console.log('数据填充完成');
});
