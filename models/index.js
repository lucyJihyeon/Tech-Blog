//import user and blog models
const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

//indicates that an user can have many blog posts
User.hasMany(Blog, {
    //user and blog are associated through the foreignKey, 'user_id'
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//indicates that a user can have many comments 
User.hasMany(Comment, {
   through: {
    model: Blog
   }
});
//blog can have many comments
Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

//Blog belongs to an individual user
Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

//comment belongs to an individual user
Comment.belongsTo(User, {
    through: {
        model: Blog
    }
});
//comment belongs to an individual blog
Comment.belongsTo(Blog, {
    foreignKey: 'blog_id'
});

module.exports = { User, Blog };