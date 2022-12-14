'use strict'
const jwt = require('jsonwebtoken')
const md5 = require('md5')
// const appConfig = require('../../config/application')
module.exports = {
    generateUserJwtToken: function (data) {
        return jwt.sign({ data }, appConfig.jwt.secret, { expiresIn: appConfig.jwt.expire })
    },
    async ecodeUserJwtToken(token) {
        return jwt.verify(token, appConfig.jwt.secret)
    },
    password: {
        hash: async (password) =>
            await bcrypt.hash(password.toString(), 12),

        compare: async (foundPassword, encryptedPassword) =>
            await bcrypt.compare(foundPassword, encryptedPassword)
    },
    base64: {
        encode: (data) => {
            let buff = Buffer.from(data)
            return buff.toString('base64');
        },
        decode: (data) => {
            let buff = Buffer.from(data, 'base64');
            return buff.toString('utf8');
        }
    },
    md5: (data) => { return md5(data) }
}