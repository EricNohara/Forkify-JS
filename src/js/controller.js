import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC, RESET_FORM_SEC } from './config.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import cartView from './views/cartView.js';

if (module.hot) {
  module.hot.accept();
}

const recipeContainer = document.querySelector('.recipe');

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 0: update the results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // 1: Loading recipe
    await model.loadRecipe(id);

    // 2: Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err.message);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // 1. Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2. load the search results
    await model.loadSearchResults(query);

    // 3. render results
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  //Render new results
  resultsView.render(model.getSearchResultsPage(goToPage));
  //Render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings in the state
  model.updateServings(newServings);

  //Update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1: Add or remove a bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else if (model.state.recipe.bookmarked)
    model.removeBookmark(model.state.recipe.id);

  // 2: update the recipe view
  recipeView.update(model.state.recipe);

  // 3: render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    //Show loading spinner
    addRecipeView.renderSpinner();

    //Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    //Render recipe
    recipeView.render(model.state.recipe);

    //Render success message
    addRecipeView.renderMessage();

    //Rerender the bookmarkView
    bookmarksView.render(model.state.bookmarks);

    //Change the id in the URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    //Close form window
    setTimeout(function () {
      addRecipeView._toggleWindowHandler();

      //Refresh the form
      setTimeout(() => addRecipeView.refreshForm(), RESET_FORM_SEC * 1000);
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err.message, '⚠⚠');
    addRecipeView.renderError(err.message);
  }
};

const controlAddCart = function () {
  // cartView.render(model.state.cart);
  // model.addIngredientsToCart();
  // console.log(model.state.cart);
  alert('Sorry, this feature has not yet been implemented ⚠');
};

const newFeature = function () {
  console.log('Welcome to the application');
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  cartView.addHandlerCartBtn(controlAddCart);
  newFeature();
};
init();

// console.log(model.state.recipe.ingredients);
// const ings = model.state.recipe.ingredients.map(el => {
//   console.log(el);
//   return Object.entries(el);
// });
// const ings = [...model.state.recipe.ingredients];
// console.log(ings);
// const arr = [];
// ings.forEach(ing => {
//   console.log(ing.description);
//   console.log(arr.indexOf(ing.description));
// });
// console.log();
