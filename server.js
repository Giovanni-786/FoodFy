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

server.get("/recipes/:index", function (req, res) {
    const recipes = [...recipesData]; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
    
    const recipe = recipesData.find(function(recipe){
        return recipe.id == recipeIndex
    }) 
    
    if(!recipe){
        return res.send("não encontrado")
    }
    
    return res.render("recipe", {item:recipesData})
    
  })




server.use(function(req, res) {
    res.status(404).send("not-found");
});


server.listen(5000, function(){
    console.log("Server is running")
})