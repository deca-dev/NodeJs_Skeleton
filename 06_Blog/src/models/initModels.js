const Users = require('./users.model')
const Posts = require('./posts.models')
const Categories = require('./categories.models')

const initModels = () => {
    // 1 -> n:
    Posts.belongsTo(Users)
    Users.hasMany(Posts)
    // 1 -> n:
    Posts.belongsTo(Categories)
    Categories.hasMany(Posts)

}

module.exports = initModels