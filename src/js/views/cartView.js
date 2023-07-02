import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class CartView extends View {
  _parentElement = document.querySelector('.cart__items__list');

  //   addHandlerRender(handler) {
  //     window.addEventListener('load', handler);
  //   }

  addHandlerCartBtn(handler) {
    document
      .querySelector('.nav__btn--cart')
      .addEventListener('click', handler);
  }

  //   _generateMarkup() {
  //     return this._data.map(item => previewView.render(item, false)).join('');
  //   }
}

export default new CartView();
