const express = require('express')
const blogController = require('../controllers/blogcontroller')
const router = express.Router()

router.get('/', blogController.Home)
router.get('/about', blogController.About)
router.get('/contact', blogController.Contact)
router.get('/posts/:postTitle', blogController.getPost)
router.route('/compose')
    .get(blogController.getCompose)
    .post(blogController.postCompose)

module.exports = router