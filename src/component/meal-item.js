import {cssomSheet, create} from "twind";

const sheet = cssomSheet({target: new CSSStyleSheet()});

const { tw } = create({sheet});

class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
    this.shadowRoot.adoptedStyleSheets = [sheet.target];
  }

  set meal(meal) {
    this._meal = meal
    this.setAttribute("data-mealID", this._meal.idMeal)
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <article id="meal" class="${tw`relative cursor-pointer w-44 h-44 text-center`}">
        <img src="${this._meal.strMealThumb}" alt="${this._meal.strMeal}" class="${tw`w-full h-full border-2 border-white rounded-lg`}">
        <div id="meal-info" data-mealID="${this._meal.idMeal}" class="${tw`absolute meal-info top-0 left-0 w-full h-full rounded-lg bg-black bg-opacity-75 flex items-center justify-center transition-opacity opacity-0 hover:opacity-100`}">
          <h3 class="${tw`font-bold`}">${this._meal.strMeal}</h3>
        </div>
      </article>
    `;
  }
}

customElements.define("meal-item", MealItem)