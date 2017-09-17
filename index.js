const koa = require('koa');
const login = require('./middlewares/login').login;

const app = new koa();

const error = (ctx) => {
    const err = new Error(`Bad request or mock not implemented for ${ctx.request.originalUrl} method: ${ctx.req.method}`);
    err.status = 404;
    err.expose = true;
    throw err;
};

const URL_MAPPER = {
    'login': login,
    'default': error
};

const getToken = originalUrl => originalUrl.split('/')[1] || 'default';

const getMethod = ctx => URL_MAPPER[getToken(ctx.request.originalUrl)] || URL_MAPPER['default'];

app.use((ctx) => {
    const method = getMethod(ctx);
    method && method(ctx);
});

app.listen(3000);
