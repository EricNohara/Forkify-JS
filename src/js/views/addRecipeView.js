import View from './View';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded!';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener(
      'click',
      this._toggleWindowHandler.bind(this)
    );
  }

  _toggleWindowHandler() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener(
      'click',
      this._toggleWindowHandler.bind(this)
    );
    this._overlay.addEventListener(
      'click',
      this._toggleWindowHandler.bind(this)
    );
    document.addEventListener(
      'keyup',
      function (e) {
        //Guard clauses
        if (e.key !== 'Escape') return;
        if (this._overlay.classList.contains('hidden')) return;
        if (
          !(
            e.target.parentNode.parentNode === document ||
            e.target === this._btnOpen
          )
        )
          return;
        //toggle the window with correct this
        const toggleWindow = this._toggleWindowHandler.bind(this);
        toggleWindow();
      }.bind(this)
    );
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      //convert the array into an object
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {
    return `
    <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TESTING" required name="title" type="text" />
          <label>URL</label>
          <input value="TESTING" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TESTING" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TESTING" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
    `;
  }

  refreshForm() {
    this._clearParentElement();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateMarkup()
    );
  }
}

export default new AddRecipeView();
