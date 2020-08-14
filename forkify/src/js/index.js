import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';

/**
 * Global State of the App
 *  - Search bject
 *  - Current recipe object
 *  - Shopping list object
 *  - Liked recipes
 */
const state = {};

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

        // 5. Search for the recipes
        // Why await because we want to have the result before rendering
        await state.search.getResult();

        // 6. Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result)
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault(); // Disables page reload
    controlSearch();
});