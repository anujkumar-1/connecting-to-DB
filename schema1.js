const {Sequelize, DataTypes}= require("sequelize")
const sequelize = require("./database")

const Users = sequelize.define("newTable", {
    
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phonenumber:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = Users