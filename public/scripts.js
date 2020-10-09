const cardsRecipes = document.querySelectorAll('.card-recipe');

const closeModal = document.querySelector('.close-modal');

const modalOverlay = document.querySelector('.modal-overlay')




for(let card of cardsRecipes){
    card.addEventListener('click', function(){
        /*const recipeId = card.getAttribute("id");

        const titleRecipes = card.querySelector('.card-recipe h3').innerHTML;
        const AuthorRecipes = card.querySelector('.card-recipe p').innerHTML;

        modalOverlay.classList.add('active');
        document.querySelector('.modal-content h3').innerHTML = titleRecipes;
        document.querySelector('.modal-content p').innerHTML = AuthorRecipes;

        modalOverlay.querySelector("iframe").src = `/assets/${recipeId}.png`;
        */

        const recipesIndex = card.getAttribute("id");
        window.location.href = `/recipe/${recipesIndex}`

    })
}
