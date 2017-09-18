const mockPostLogin = (request) => {
    const body = request.body;
    if (body.user && body.user.indexOf('@ing.com') !== -1) {
        // valid email, get correct json
        return {
            status: 200,
            body: {
                token: 'jksdq67yehq2ui3y93ih'
            }
        };
    } else {
        // invalid email
        return {
            status: 400,
            body: {
                message: 'Incorrect user or password'
            }
        };
    }
};

const mockGetLogin = (request) => {
    
};

const METHOD_FACTORY = {
    'GET': mockGetLogin,
    'POST': mockPostLogin
};

module.exports = {
    login : (ctx) => {
        const response = METHOD_FACTORY[ctx.request.method](ctx.request);
        ctx.body = response.body;
        ctx.status = response.status;
    }
};
