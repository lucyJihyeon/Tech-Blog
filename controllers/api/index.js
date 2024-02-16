//import Routers
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const commentRoutes = require('./commentRouter');
const blogRoutes = require('./blogRouter');

router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comment', commentRoutes);
router.use('/blog', blogRoutes);

module.exports = router;