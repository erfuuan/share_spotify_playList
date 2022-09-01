const router = require('express').Router();
const user = require('./user/user.router')
const admin = require('./admin/admin.router')

router.use('/user', user)
router.use('/admin', admin)

module.exports = router;