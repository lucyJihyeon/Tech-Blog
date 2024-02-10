//import user and blog models
const User = require('./User');
const Blog = require('./Blog');

//indicates that an user can have many blog posts
User.hasMany(Blog, {
    //user and blog are associated through the foreignKey, 'user_id'
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//Blog belongs to an individual user
Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Blog };