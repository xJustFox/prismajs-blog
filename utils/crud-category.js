const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCategories = (categories, cf) => {
    prisma.category.createMany({ data: categories.map(category => ({ name: category })) })
        .then(count => cf(count))
        .catch(err => console.error(err))
}

module.exports = {
    createCategories,
}