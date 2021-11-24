const loginModel= require("../models/loginModel")
const myuserModel=require("../models/myuserModel")
const jwt=require('jsonwebtoken')


const createnewlogin = async function (req, res) {
    
let userdata = req.body;
let username=req.body.name;
let userpassword =req.body.password;

const finduser=await myuserModel.findOne({name:username,password:userpassword,isDeleted:false})
if (finduser ){
     //await loginModel.create(userdata)
     let token = jwt.sign({_id:finduser._id},"radium")
     res.header('x-auth-token',token)
    res.send({status: true,data:{userid:finduser._id}})
}else{
    res.send({status: false,msg:"Enter correct name and password"})
}

}
module.exports.createnewlogin= createnewlogin