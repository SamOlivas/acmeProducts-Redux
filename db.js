const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme-products')

const Product = db.define('product', {
  name: Sequelize.STRING
})

const synchAndSeed = async() => {
  db.sync({force: true})
  seedData.map((prod) => await Product.create(prod))
}

const seedData = [
  {name: 'prod 1'},
  {name: 'prod 2'},
  {name: 'prod 3'},
  {name: 'prod 4'}
]

module.exports = {
  models: {
    Product
  },
  synchAndSeed
}
