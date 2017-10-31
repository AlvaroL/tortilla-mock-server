module.exports = {
  registration : (ctx) => {
    const body = JSON.parse(ctx.request.body);
    const response = {};
    if (body.email.endsWith('@ing.com')) {
      response.body = JSON.stringify({
        error: 'mail',
        msg: 'You cannot use your working email for this app'
      });
      response.status = 404;
    } else {
      response.body = JSON.stringify({});
      response.status = 200;
    }
    ctx.body = response.body;
    ctx.status = response.status;
  }
};