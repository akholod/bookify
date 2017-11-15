import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx) => {
  await ctx.render('home');
});

router.get('/test', (ctx) => {
  ctx.body = 'test route';
});

export default router;
