import Router from 'koa-router';

const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'main route';
});

router.get('/test', (ctx) => {
  ctx.body = 'test route';
});

export default router;
