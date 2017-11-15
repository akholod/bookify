import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import favicon from 'koa-favicon';
import serve from 'koa-static';
import compress from 'koa-compress';
import views from 'koa-views';
import { join } from 'path';
import { port } from 'config';
import router from './routes';

const app = new Koa();

app.use(bodyParser());
app.use(logger());
app.use(compress());
app.use(serve(join(__dirname, '/public'), { maxage: 25920000000 }));
app.use(favicon(join(__dirname, '/favicon.ico')));
app.use(views(join(__dirname, '/views'), { extension: 'pug' }));

app.use(router.routes());

app.listen(port);
