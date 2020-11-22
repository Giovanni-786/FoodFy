const cardsRecipes = document.querySelectorAll('.card-recipe');

const hideAndShow_Ingredients = document.querySelector('.HideAndShow_Ingredients');

const hideAndShow_Preparation = document.querySelector('.HideAndShow_preparation');

const hideAndShow_Information = document.querySelector('.HideAndShow_Information');



for(let card of cardsRecipes){
    card.addEventListener('click', function(){
        const recipesIndex = card.getAttribute("id");
        window.location.href = `/recipes/${recipesIndex}`

    })
}

hideAndShow_Ingredients.addEventListener('click', function(){ 
    const ingredients = document.querySelector('ul');
    ingredients.classList.toggle('hide');

    if(ingredients.className == "hide" ){
        hideAndShow_Ingredients.innerHTML = "MOSTRAR"
    }
    else{
        hideAndShow_Ingredients.innerHTML = "ESCONDER"
    }
})



hideAndShow_Preparation.addEventListener('click', function(){ 
    const preparation = document.querySelector('.preparation_mod_content div');
    preparation.classList.toggle("hide")

    if(preparation.className == "hide"){
        hideAndShow_Preparation.innerHTML = "MOSTRAR"
    }
    else{
        hideAndShow_Preparation.innerHTML = "ESCONDER"        
    }
   
    
})


hideAndShow_Information.addEventListener('click', function(){ 
    const information = document.querySelector('.informations_add_content p');
    information.classList.toggle("hide")

    if(information.className == "hide"){
        hideAndShow_Information.innerHTML = "MOSTRAR"
    }
    else{
        hideAndShow_Information.innerHTML = "ESCONDER"        
    }
   
    
})
