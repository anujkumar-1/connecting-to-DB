const Sequelize= require("sequelize")
const sequelize = new Sequelize("Users", "root", "Anujkumar@1", {
    host: "localhost",
    dialect: "mysql"
})



module.exports = sequelize