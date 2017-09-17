const koa = require('koa');

const app = new koa();

const login = (ctx) => {
    ctx.body = 'login';
};

const error = (ctx) => {
    ctx.body = `Bad request or mock not implemented for ${ctx.request.originalUrl} method: ${ctx.req.method}`;
};

const URL_MAPPER = {
    'login': login,
    'default': error
};

const getToken = ctx => ctx.request.originalUrl.split('/')[1] || 'default';

app.use((ctx) => {
    console.log(getToken(ctx));
    const method = URL_MAPPER[getToken(ctx)];
    method && method(ctx);
    console.log(method);
});

app.listen(3000);
