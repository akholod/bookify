import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import { port } from 'config';
import router from './routes';

const app = new Koa();

app.use(bodyParser());
app.use(logger());

app.use(router.routes());

app.listen(port);
