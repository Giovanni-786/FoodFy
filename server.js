const express = require('express');
const nunjucks = require('nunjucks');
const server = express();



server.use(express.static('public'));


const recipesData = require('./data')


server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})




server.get("/", function(req, res){
    return res.render("index")

})



server.get("/about", function(req, res){
    return res.render("about")

})




server.get("/recipes", function(req, res){
    return res.render("recipes", {items:recipesData})

})



server.get("/recipe/:index", function (req, res) {
    const recipes = [...recipesData]; 
    const recipeIndex = req.params.index;
  
    
    const recipe = recipes.findIndex(function(recipe){
        return recipe == recipeIndex
        
     })   

     if(!recipe){
         return res.send('index not found')
     }

   
     /*return res.render('recipe', {item:recipesData}) */
     console.log(recipes[recipeIndex])

  })





server.use(function(req, res) {
    res.status(404).send("not-found");
});


server.listen(5000, function(){
    console.log("Server is running")
})