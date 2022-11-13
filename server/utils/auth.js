const jwt = require('jsonwebtoken');

const secret = '"U](Qr8rT:{K^pJ>KhP|n6u5%<&4"e!0';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token){
            return req;
        }
        try {
            const { data } = jwt.verify(token, secret, {maxAge: expiration});
            req.profile = data;
        } catch  {
            console.log ('Invalid token');
        }
        return req
    },
    signToken: function ({ userName, email, _id}) {
        const payload = { email, userName, _id };
        return jwt.sign({data: payload }, secret, {expiresIn: expiration});
    },
};