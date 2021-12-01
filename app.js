const express=require("express")
const app=express();
const {engine}=require("express-handlebars")


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const portfolioPage=(req,res)=>{
    const name=(req.query.name)
    res.render("home",{name:name})
 
    }

app.get("/home",portfolioPage)

app.listen(3000,()=>{
    console.log("server is running at Port 3000")
})