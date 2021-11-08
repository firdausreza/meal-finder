import {cssomSheet, create} from "twind";

const sheet = cssomSheet({target: new CSSStyleSheet()});

const { tw } = create({sheet});

class MealDetail extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
    this.shadowRoot.adoptedStyleSheets = [sheet.target];
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    if (this._meal === null) {
      this.shadowDOM.innerHTML = "";
    } else {
      let instructions = this._meal.strInstructions;
      instructions = instructions.split(". ");
      this.shadowDOM.innerHTML = `
        <article class="${tw`w-full flex flex-col items-center justify-center`}">
          <h2 class="${tw`text-3xl font-bold text-center`}">${this._meal.strMeal}</h2>
          <img src="${this._meal.strMealThumb}" alt="${this._meal.strMealThumb}" class="${tw`mt-4 w-1/2 h-1/2 border-2 border-white rounded-lg`}">
          <div class="${tw`mt-4 w-full text-center px-8 py-12 border-2 border-dashed border-white rounded-lg`}">
            <p>Meal Category: <b>${this._meal.strCategory}</b></p>
            <p>Nationality: <b>${this._meal.strArea}</b></p>
          </div>
          <ul class="${tw`mt-4 list-decimal`}">
            ${instructions.map(item => {
              return `<li>${item}</li>`
            }).join(" ")}
          </ul>
        </article>
      `;
    }
  }
}

customElements.define("meal-detail", MealDetail);