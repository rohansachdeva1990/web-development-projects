import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
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
    }
});

