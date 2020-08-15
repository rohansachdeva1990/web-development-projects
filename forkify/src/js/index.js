import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import {
    elements,
    renderLoader,
    clearLoader
} from './views/base';

/**
 * Global State of the App
 *  - Search bject
 *  - Current recipe object
 *  - Shopping list object
 *  - Liked recipes
 */
const state = {};

// TESTING
window.state = state;

/**
 * SEARCH CONTROLLER
 */
// async because we want this to happen this in background, and also
// await can only be in async functions
const controlSearch = async () => {
    // 1. Get the query from the view
    const query = searchView.getInput();

    // 2. If query, create new search object
    if (query) {
        // 3. New search object and add to the state
        state.search = new Search(query);

        // 4. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResult);

        try {
            // 5. Search for the recipes
            // Why await because we want to have the result before rendering
            await state.search.getResult();

            // 6. Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result)
        } catch (error) {
            alert('Something went wrong with the search...');
            clearLoader(); // Clear the loader in any case
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault(); // Disables page reload
    controlSearch();
});

// // TESTING
// window.addEventListener('load', e => {
//     e.preventDefault(); // Disables page reload
//     controlSearch();
// });


elements.searchResultPages.addEventListener('click', e => {
    // Idea here is to locate the page number which was added by us during button creation
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        // read the go-to page
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/**
 * RECIPE CONTROLLER
 */
const controlRecipe = async () => {

    // Get the ID from the URL
    // Getting the hash value from the selected the selected url
    const id = window.location.hash.replace('#', '');
    // console.log(id);

    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected search, only if there was a search
        if (state.search) {
            searchView.highlightSelected(id);
        }

        // Create new recipe object
        state.recipe = new Recipe(id);

        // TESTING
        // window.r = state.recipe; 

        try {
            // Get the recipe data
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        } catch (error) {
            alert('Error processing recipe!');
        }
    }
};

// window.addEventListener('hashchange', controlRecipe);
// // When the page is loaded, for eg user pasting a url
// window.addEventListener('load', controlRecipe);
// Adding same listener to multiple events
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**
 * LIST CONTROLLER
 */
const controlList = () => {

    // Create a new list If there is none yet
    if (!state.list) {
        state.list = new List();
    }

    // Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}

// Handle delete and update list item events
elements.shopping.addEventListener('click', e => {

    // Try and read the id forthe elements we click on
    // We are trying to find an element which contains our data attribute
    // so from the markup we know, shopping__item is the closest one, then we 
    // select our attribute. 
    // Now wherever we click in that region (shopping__item), the "event" will be delegated to 
    // closest shopping item...
    const id = e.target.closest('.shopping__item').dataset.itemid;

    // Handle the delete button
    // Always check the child element
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        // Delete from state
        state.list.deleteItem(id);

        // Delete from UI
        listView.deleteItem(id);

    } else if (e.target.matches('.shopping__count-value')) {
        // Handle the count update
        const val = parseFloat(e.target.value);
        state.list.updateCount(id, val);
    }
});


/**
 * LIKES CONTROLLER
 */
const controlLike = () => {
    // Create a new list If there is none yet
    if (!state.likes) {
        state.likes = new Likes();
    }
    const currentId = state.recipe.id;

    // User has not yet like the current recipe
    if (!state.likes.isLiked()) {
        // Add like to the state
        const newLike = state.likes.addLike(currentId, 
            state.recipe.title,
            state.recipe.author,
            state.recipe.img)

        // Toggle the like button

        // Add like to the UI list
        
    }
    // User has liked current recipe
    else {
        // Remove like to from  state
        state.likes.deleteLike(currentId);

        // Toggle the like button

        // Remove like from the UI list

    }
}


// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        // Decrease button is clicked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        // Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        // Add ingredients to shopping list
        controlList();
    } else if (e.target.matches('.recipe__love, .recipe__love *')) {
        // Like controller
        controlLike();
    }
});