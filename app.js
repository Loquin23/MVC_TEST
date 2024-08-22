const express = require("express");
const msql= require("mysql");
const app = express();
let conexion =msql.createConnection({
    host:"localhost",
    database:"mvc",
    user:"root",
    password:""
})
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/", function(req,res){
    res.render("registro");
});
app.post("/validar",function(req,res){
    const datos = req.body;
    console.log(datos);
    let Nombre= datos.Nom;
    let Precio = datos.Pre;
    let Cedula = datos.Ced;
    let registrar = "INSERT INTO productos (Cedula,nombre,precio) VALUES('"+Cedula+"','"+Nombre+"','"+Precio+"')"
    conexion.query(registrar,function(error){
        if(error){
            throw error;
        }else{
            console.log("Datos cargados");
        }
    });
});
app.listen(3000,function(){
  console.log("El servidor es http://localhost:3000");
})