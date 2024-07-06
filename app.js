const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./database");
const Users = require("./schema1");

app.use(bodyParser.json({ extended: false }));
app.use(cors());

app.post("/postusers", async (req, res, next) => {
  try {
    const name = req.body.u_name;
    const email = req.body.u_email;
    const phonenumber = req.body.u_ph_no;
    console.log(name, email, phonenumber)
    const data = await Users.create({
      name: name,
      email: email,
      phonenumber: phonenumber,
    });
    res.status(201).json({ newUserDetails: data });
  } catch (err) {
    console.log(err);
  }
  
});

app.get("/getAllUsers", async (req, res, next) => {
  try {
    const data = await Users.findAll({});
    res.status(200).json({ allUserDetails: data });
  } catch (err) {
    console.log(err);
  }
});

app.get("/deleteUsers/:id", async(req, res, next)=>{
  const id= req.params.id
  console.log(id)
  try{
    const liToDelete = await Users.destroy({where:{id: "id"}})
  }
  catch(err){
    console.log(err)
  }
  
})

sequelize
  .sync()
  .then((result) => {
    console.log("database sucessfully connected");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
