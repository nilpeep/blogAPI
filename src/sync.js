"use strict"

const { BlogCategory, BlogPost } = require('./models/blog.model')

const User = require('./models/user.model')

module.exports = async () => {

    // /* BlogCategory */

    // // Get first blogCategory:
    // const blogCategory = await BlogCategory.findOne()
    // // console.log(blogCategory._id)

    // if (blogCategory) {
    //     BlogPost.updateMany({ //? Filter:
    //         "blogCategoryId": { $exists: false } // field yok ise
    //     }, { //? Update:
    //         "blogCategoryId": blogCategory._id // kaydı ata
    //     }).catch(err => console.log(err))
    // }

    // // End:
    // console.log('* Synchronized *')
    // /* Finished */

    await User.deleteMany().then(()=> console.log("-All users deleted."))

    await BlogCategory.deleteMany().then(()=> console.log("-All blogCategories deleted."))

    await BlogPost.deleteMany().then(()=> console.log("-All blogPosts deleted."))

    const user = await User.create({
        email: "admin@site.com",
        password: "XXXXX"
    })

    const blogCategory = await BlogCategory.create({
        name: "Default"
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