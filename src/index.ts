import * as dotenv from "dotenv";
import Instagram from './instagram';

dotenv.config();

(async () => {
  const ig = new Instagram();
  await ig.initialize({headless:false})
  await ig.login()
})()
