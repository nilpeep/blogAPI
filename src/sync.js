"use strict"

const { BlogCategory, BlogPost } = require('./models/blog.model')

const User = require('./models/user.model')

module.exports = async () => {

    await User.deleteMany().then(()=> console.log("-All users deleted."))

    await BlogCategory.deleteMany().then(()=> console.log("-All blogCategories deleted."))

    await BlogPost.deleteMany().then(()=> console.log("-All blogPosts deleted."))

    const user = await User.create({
        email: "admin@site.com",
        username:"admin",
        password: "XXXXX",
        firstName:"admin",
        lastName:"admin"
    })

    const blogCategory = await BlogCategory.create({
        name: "Default category"
    })

        for(let key in [...Array(200)]){
            await BlogPost.create({
                title: `${key} Title`,
                content: `${key} Content`,
                blogCategoryId: blogCategory._id,
                userId: user._id,
                published: Boolean(key % 2)
            })
        }


    console.log("* Synchronized *")

}