const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://yadukrishnan807:Yadu1234@cluster0.acy3zra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))
let mongoSchema=mongoose.Schema

const EmployeeSchema = mongoose.Schema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})

var employeeModel=mongoose.model("employee",EmployeeSchema)
module.exports= employeeModel