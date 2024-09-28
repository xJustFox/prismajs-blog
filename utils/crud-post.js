const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const readPosts = (cf) => {
    prisma.post.findMany()
        .then(posts => cf(posts))
        .catch(err => console.error(err))
}

const readPostBySlug = (slug, cf) => {
    prisma.post.findUnique({
        where: { slug },
        include: {
            category: {
                select: {
                    name: true
                }
            },
            tags: {
                select: {
                    name: true
                }
            }
        }
    })
        .then(post => cf(post))
        .catch(err => console.error(err))
}

const createPost = (data, cf) => {
    prisma.post.create({ data })
        .then(post => cf(post))
        .catch(err => console.error(err))
}

const updatePost = (slug, data, cf) => {
    prisma.post.update({ where: { slug }, data })
        .then(post => cf(post))
        .catch(err => console.error(err))
}

const deletePost = (slug, cf) => {
    prisma.post.delete({ where: { slug } })
        .then(post => cf(post))
        .catch(err => console.error(err))
}

module.exports = {
    readPosts,
    readPostBySlug,
    createPost,
    updatePost,
    deletePost
}