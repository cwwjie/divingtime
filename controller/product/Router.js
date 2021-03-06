const router = require('koa-router')();
const index = require('./index.js');
const submit = require('./submit/Router.js');
const all = require('./all/Router.js');

router.get('/', index);
router.get('/index.html', index);
router.use('/all', all.routes());

module.exports = router;
